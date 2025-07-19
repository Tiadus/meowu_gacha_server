import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm'
import { Game } from '../games/games.entity'
import { Banner_Character } from 'src/banner_characters/banner_characters.entity';
import { Banner_Pity_System } from 'src/banner-pity-systems/banner_pity_system.entity';

@Entity('Banner')
export class Banner {
    @PrimaryGeneratedColumn()
    b_id: number

    @ManyToOne(() => Game, (game) => game.banners)
    @JoinColumn({name: 'g_id'})
    game: Game;

    @Column()
    b_name: string

    @Column()
    image_url: string

    @Column()
    highest_rarity: number

    @Column()
    lowest_rarity: number

    @Column()
    date_added: Date

    @Column()
    last_updated: Date

    @OneToMany(() => Banner_Character, (banner_character) => banner_character.banner)
    banner_characters: Banner_Character[]

    @OneToMany(() => Banner_Pity_System, (bps) => bps.banner)
    bpss: Banner_Pity_System[]
}