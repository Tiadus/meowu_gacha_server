import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Game_Character } from '../game_characters/game_character.entity'
import { Banner } from '../banners/banner.entity'

@Entity('Banner_Character')
export class Banner_Character {
    @PrimaryGeneratedColumn()
    bc_id: number

    @ManyToOne(() => Game_Character, (game_character) => game_character.banner_characters)
    @JoinColumn({name: 'gc_id'})
    game_character: Game_Character

    @ManyToOne(() => Banner, (banner) => banner.banner_characters)
    @JoinColumn({name: 'b_id'})
    banner: Banner
}