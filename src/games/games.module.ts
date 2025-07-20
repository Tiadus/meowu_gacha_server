import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Game } from './game.entity'
import { Game_Character } from 'src/game_characters/game_character.entity'
import { Banner } from 'src/banners/banner.entity'
import { Banner_Character } from 'src/banner_characters/banner_character.entity'
import { Guarantee_Pity_System } from 'src/guarantee_pity_system/guarantee_pity_system.entity'
import { Banner_Pity_System } from 'src/banner_pity_systems/banner_pity_system.entity'
import { GamesService } from './games.service'
import { GamesController } from './games.controller'

@Module({
    imports: [
        TypeOrmModule.forFeature([Game, Game_Character, Banner, Banner_Character, Guarantee_Pity_System, Banner_Pity_System])
    ],
    controllers: [GamesController],
    providers: [GamesService],
})

export class GamesModule {}