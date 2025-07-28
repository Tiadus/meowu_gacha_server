import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Banner } from '../banners/banner.entity'
import { Game_Character } from '../game_characters/game_character.entity';
import { DecimalTransformer } from '../utils/decimal.transformer';

@Entity('Game')
export class Game {
    @PrimaryGeneratedColumn()
    g_id: number;

    @Column()
    g_name: string

    @Column('decimal', { precision: 10, scale: 3, transformer: DecimalTransformer })
    money_per_pull: number

    @Column()
    image_url: string

    @Column()
    developer: string

    @Column()
    introduction: string

    @Column()
    date_added: Date

    @Column()
    last_updated: Date

    @OneToMany(() => Game_Character, (character) => character.game)
    game_characters: Game_Character[]

    @OneToMany(() => Banner, (banner) => banner.game)
    banners: Banner[];
}