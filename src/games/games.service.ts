import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity';
import { TransformedGame, transformGame } from '../utils/game.utils';

@Injectable()
export class GamesService {
    constructor(
        @InjectRepository(Game)
        private gamesRepository: Repository<Game>
    ) {}

    findAll() {
        return this.gamesRepository.find();
    }

    async findOne(g_id: number) {
        const gameInfo = await this.gamesRepository.findOne({
            where: {g_id: g_id},
            relations: ['game_characters', 'banners', 'banners.banner_characters', 'banners.banner_characters.game_character', 'banners.bpss', 'banners.bpss.gps']
        })

        if (!gameInfo) {
            throw new NotFoundException('Game Not Found')
        }
        
        if (gameInfo) {
            const transformedGame: TransformedGame = transformGame(gameInfo);
            return transformedGame;
        } else {
            throw new InternalServerErrorException()
        }
    }
}