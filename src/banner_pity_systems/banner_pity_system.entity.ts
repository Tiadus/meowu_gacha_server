import { Banner } from '../banners/banner.entity'
import { Guarantee_Pity_System } from '../guarantee_pity_system/guarantee_pity_system.entity'
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'

@Entity('Banner_Pity_System')
export class Banner_Pity_System {
    @PrimaryGeneratedColumn()
    bps_id: number

    @ManyToOne(() => Guarantee_Pity_System, (gps) => gps.bpss)
    @JoinColumn({name: 'gps_id'})
    gps: Guarantee_Pity_System

    @ManyToOne(() => Banner, (banner) => banner.bpss)
    @JoinColumn({name: 'b_id'})
    banner: Banner

    @Column()
    rarity: number

    @Column()
    bps_type: string
}