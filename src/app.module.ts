import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GamesModule } from './games/games.module';
import { Game } from './games/game.entity';
import { Game_Character } from './game_characters/game_character.entity';
import { Banner } from './banners/banner.entity';
import { Banner_Character } from './banner_characters/banner_character.entity';
import { Guarantee_Pity_System } from './guarantee_pity_system/guarantee_pity_system.entity';
import { Banner_Pity_System } from './banner_pity_systems/banner_pity_system.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('DB_HOST'),
        port: parseInt(config.getOrThrow('DB_PORT'), 10),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        entities: [Game, Game_Character, Banner, Banner_Character, Guarantee_Pity_System, Banner_Pity_System],
      }),
    }),
    GamesModule,
  ],
})
export class AppModule {}
