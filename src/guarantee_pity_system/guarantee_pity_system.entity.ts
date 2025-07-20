import { Banner_Pity_System } from '../banner_pity_systems/banner_pity_system.entity'
import { DecimalTransformer } from '../utils/decimal.transformer'
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

@Entity('Guarantee_Pity_System')
export class Guarantee_Pity_System {
    @PrimaryGeneratedColumn()
    gps_id: number

    @Column('decimal', { precision: 10, scale: 3, transformer: DecimalTransformer })
    base_rate: number

    @Column('decimal', { precision: 10, scale: 3, transformer: DecimalTransformer })
    soft_pity: number

    @Column('decimal', { precision: 10, scale: 3, transformer: DecimalTransformer })
    mid_point: number

    @Column('decimal', { precision: 10, scale: 3, transformer: DecimalTransformer })
    acceleration: number

    @Column('decimal', { precision: 10, scale: 3, transformer: DecimalTransformer })
    coin_flip_rate: number

    @OneToMany(() => Banner_Pity_System, (bps) => bps.gps)
    bpss: Banner_Pity_System[]
}