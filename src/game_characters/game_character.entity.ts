import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm'
import { Game } from '../games/game.entity'
import { Banner_Character } from '../banner_characters/banner_character.entity'

@Entity('Game_Character')
export class Game_Character {
    @PrimaryGeneratedColumn()
    gc_id: number

    @ManyToOne(() => Game, (game) => game.game_characters)
    @JoinColumn({name: 'g_id'})
    game: Game

    @Column()
    gc_name: string

    @Column()
    image_url: string

    @Column()
    rarity: number

    @Column()
    limited: boolean

    @Column()
    date_added: Date

    @Column()
    last_updated: Date

    @OneToMany(() => Banner_Character, (banner_character) => banner_character.game_character)
    banner_characters: Banner_Character[]
}