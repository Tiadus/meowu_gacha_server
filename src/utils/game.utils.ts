import { Banner } from "src/banners/banners.entity";
import { Game_Character } from "src/game-characters/game_character.entity";
import { Game } from "src/games/games.entity";

type TransformedBanner = {
    b_id: number,
    b_name: string,
    image_url: string,
    highest_rarity: number,
    lowest_rarity: number,
    date_added: Date,
    last_updated: Date,
    banner_characters: number[][][],
    base_rate: number[],
    soft_pity: number[],
    mid_point: number[],
    acceleration: number[],
    coin_flip_rate: number[]
}

export type TransformedGame = {
    g_id: number,
    g_name: string,
    image_url: string,
    developer: string,
    introduction: string,
    date_added: Date,
    last_updated: Date,
    game_characters: Game_Character[],
    banners: TransformedBanner[]
}

function transformBanners(games_characters: Game_Character[], banners: Banner[]): TransformedBanner[] {
    const processedBanners: TransformedBanner[] = [];

    for (const banner of banners) {
        // Sort the pity systems in descending order based on their rarities. Putting highest rarity in the first index position.
        banner.bpss.sort((a, b) => b.rarity - a.rarity);

        // Elements in base_rate, soft_pity, mid_point, acceleration, coin_flip_rate represent attributes of a specific rarity.
        // The rarity which they represent has the same index position as them.
        // For example, the first element in base_rate[] represents the base rate of the highest rarity.
        const base_rate: number[] = [];
        const soft_pity: number[] = [];
        const mid_point: number[] = [];
        const acceleration: number[] = [];
        const coin_flip_rate: number[] = [];

        // Check if the element is 0 or not
        // If an element is 0, the data is invalid for that rarity
        // For example, if rarity 3 has its soft_pity as 0, then theres no rateup or offrate for characters of this rarity.
        // Therefore, its soft pity is not taken into account in the computation to pick the result of each pull.
        for (const bps of banner.bpss) {
            if (Number(bps.gps.base_rate) != 0) {
                base_rate.push(Number(bps.gps.base_rate));
            }
            if (Number(bps.gps.soft_pity) != 0) {
                soft_pity.push(Number(bps.gps.soft_pity));
            }
            if (Number(bps.gps.mid_point) != 0) {
                mid_point.push(Number(bps.gps.mid_point));
            }
            if (Number(bps.gps.acceleration) != 0) {
                acceleration.push(Number(bps.gps.acceleration));
            }
            if (Number(bps.gps.coin_flip_rate) != 0) {
                coin_flip_rate.push(Number(bps.gps.coin_flip_rate));
            }
        }

        // Each row, representing the rarity in descending order, of the matrix is an array.
        // Each of these arrays contain: 
        // 1 array of number, if all the characters of the rarity can be picked.
        // 2 arrays of number, ids of the rateup characters and offrate character of this rarity.
        const bannerCharacterIdMatrix: any = [];
        for (let i = 0; i < base_rate.length; i++) {
            if (i < soft_pity.length) {
                bannerCharacterIdMatrix.push([[],[]]);
            } else {
                bannerCharacterIdMatrix.push([[]]);
            }
        }

        // Pushing the id of the rate up character inside the matrix.
        for (let i = 0; i < banner.banner_characters.length; i++) {
            bannerCharacterIdMatrix[banner.highest_rarity-banner.banner_characters[i].game_character.rarity][0].push(banner.banner_characters[i].game_character.gc_id);
        }

        // Fill each row of the matrix with ids of off-rate characters.
        // Rarity that has no rateup characters will get all the characters' ids of that rarity.
        for (const game_character of games_characters) {
            if (game_character.limited == false && !bannerCharacterIdMatrix[banner.highest_rarity-game_character.rarity][0].includes(game_character.gc_id)) {
                if (banner.highest_rarity-game_character.rarity < soft_pity.length) {
                    bannerCharacterIdMatrix[banner.highest_rarity-game_character.rarity][1].push(game_character.gc_id);
                } else {
                    bannerCharacterIdMatrix[banner.highest_rarity-game_character.rarity][0].push(game_character.gc_id);
                }
            }
        }

        // Compute the transformed banner, ready to be sent to the frontend.
        const { b_id, b_name, image_url, highest_rarity, lowest_rarity, date_added, last_updated } = banner;
        const processedBanner: TransformedBanner = {
            b_id, b_name, image_url, highest_rarity, lowest_rarity, date_added, last_updated,
            banner_characters: bannerCharacterIdMatrix,
            base_rate: base_rate,
            soft_pity: soft_pity,
            mid_point: mid_point,
            acceleration: acceleration,
            coin_flip_rate: coin_flip_rate
        }

        processedBanners.push(processedBanner);
    }
    return processedBanners;
}

export function transformGame(game: Game): TransformedGame {
    const transformedBanners: TransformedBanner[] = transformBanners(game.game_characters, game.banners);

    const { g_id, g_name, image_url, developer, introduction, date_added, last_updated, game_characters } = game;
    const transformedGame: TransformedGame = {
        g_id, g_name, image_url, developer, introduction, date_added, last_updated, game_characters,
        banners: transformedBanners
    }

    return transformedGame;
}