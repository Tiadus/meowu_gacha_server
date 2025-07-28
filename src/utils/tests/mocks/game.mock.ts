import { Banner } from "src/banners/banner.entity";
import { Game_Character } from "src/game_characters/game_character.entity";
import { Game } from "src/games/game.entity";

export const mockGame: Partial<Game> = {
    g_id: 0,
    g_name: 'Test Game',
    money_per_pull: 1.98,
    image_url: 'Test Image Url',
    developer: 'Test Developer',
    introduction: 'Test Introduction',
    date_added: new Date('2025-07-19T14:46:36.000Z'),
    last_updated: new Date('2025-07-19T14:46:36.000Z'),
    game_characters: [
        {
            gc_id: 1,
            gc_name: 'Test Cat 1',
            image_url: 'test_cat.jpg',
            c_type: "CHARACTER",
            rarity: 5,
            limited: true,
            date_added: new Date('2025-07-19T14:46:36.000Z'),
            last_updated: new Date('2025-07-19T14:46:36.000Z')
        } as Game_Character,
        {
            gc_id: 2,
            gc_name: 'Test Cat 2',
            image_url: 'test_cat.jpg',
            c_type: "CHARACTER",
            rarity: 5,
            limited: false,
            date_added: new Date('2025-07-19T14:46:36.000Z'),
            last_updated: new Date('2025-07-19T14:46:36.000Z')
        } as Game_Character,
        {
            gc_id: 3,
            gc_name: 'Test Cat 3',
            image_url: 'test_cat.jpg',
            c_type: "WEAPON",
            rarity: 5,
            limited: false,
            date_added: new Date('2025-07-19T14:46:36.000Z'),
            last_updated: new Date('2025-07-19T14:46:36.000Z')
        } as Game_Character,
        {
            gc_id: 4,
            gc_name: 'Test Cat 4',
            image_url: 'test_cat.jpg',
            c_type: "CHARACTER",
            rarity: 4,
            limited: false,
            date_added: new Date('2025-07-19T14:46:36.000Z'),
            last_updated: new Date('2025-07-19T14:46:36.000Z')
        } as Game_Character,
        {
            gc_id: 5,
            gc_name: 'Test Cat 5',
            image_url: 'test_cat.jpg',
            c_type: "CHARACTER",
            rarity: 4,
            limited: false,
            date_added: new Date('2025-07-19T14:46:36.000Z'),
            last_updated: new Date('2025-07-19T14:46:36.000Z')
        } as Game_Character,
        {
            gc_id: 6,
            gc_name: 'Test Cat 6',
            image_url: 'test_cat.jpg',
            c_type: "CHARACTER",
            rarity: 4,
            limited: false,
            date_added: new Date('2025-07-19T14:46:36.000Z'),
            last_updated: new Date('2025-07-19T14:46:36.000Z')
        } as Game_Character,
        {
            gc_id: 7,
            gc_name: 'Test Cat 7',
            image_url: 'test_cat.jpg',
            c_type: "CHARACTER",
            rarity: 3,
            limited: false,
            date_added: new Date('2025-07-19T14:46:36.000Z'),
            last_updated: new Date('2025-07-19T14:46:36.000Z')
        } as Game_Character
    ],
    banners: [
        {
            b_id: 1,
            b_name: 'Test Banner',
            image_url: '',
            highest_rarity: 5,
            lowest_rarity: 3,
            date_added: new Date('2025-07-19T14:46:36.000Z'),
            last_updated: new Date('2025-07-19T14:46:36.000Z'),
            banner_characters: [
                {
                    bc_id: 1,
                    game_character: {
                        gc_id: 1,
                        gc_name: 'Test Cat 1',
                        image_url: 'test_cat.jpg',
                        c_type: "CHARACTER",
                        rarity: 5,
                        limited: true,
                        date_added: new Date('2025-07-19T14:46:36.000Z'),
                        last_updated: new Date('2025-07-19T14:46:36.000Z')
                    } 
                },
                {
                    bc_id: 2,
                    game_character: {
                        gc_id: 4,
                        gc_name: 'Test Cat 4',
                        image_url: 'test_cat.jpg',
                        c_type: "CHARACTER",
                        rarity: 4,
                        limited: false,
                        date_added: new Date('2025-07-19T14:46:36.000Z'),
                        last_updated: new Date('2025-07-19T14:46:36.000Z')
                    }
                }
            ],
            bpss: [
                {
                    bps_id: 1,
                    gps: {
                        gps_id: 1,
                        base_rate: 1,
                        soft_pity: 1,
                        mid_point: 1,
                        acceleration: 1,
                        coin_flip_rate: 1,
                    },
                    rarity: 5,
                    bps_type: "CHARACTER"
                },
                {
                    bps_id: 2,
                    gps: {
                        gps_id: 2,
                        base_rate: 1,
                        soft_pity: 1,
                        mid_point: 1,
                        acceleration: 1,
                        coin_flip_rate: 1,
                    },
                    rarity: 4,
                    bps_type: "CHARACTER"
                },
                {
                    bps_id: 3,
                    gps: {
                        gps_id: 3,
                        base_rate: 1,
                        soft_pity: 0,
                        mid_point: 0,
                        acceleration: 0,
                        coin_flip_rate: 0,
                    },
                    rarity: 3,
                    bps_type: "CHARACTER"
                }
            ]
        } as Banner
    ]
}