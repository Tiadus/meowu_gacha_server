import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Game } from './games.entity'
import { Game_Character } from 'src/game-characters/game_character.entity'
import { Banner } from 'src/banners/banners.entity'
import { Banner_Character } from 'src/banner_characters/banner_characters.entity'
import { Guarantee_Pity_System } from 'src/guarantee-pity-system/guarantee_pity_system.entity'
import { Banner_Pity_System } from 'src/banner-pity-systems/banner_pity_system.entity'
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