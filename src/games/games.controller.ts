import { Controller, Get, Param } from '@nestjs/common'
import { GamesService } from './games.service'

@Controller('games')
export class GamesController {
    constructor(
        private readonly gamesService: GamesService
    ) {}

    @Get()
    async findAll() {
        const result = await this.gamesService.findAll();
        return {data: result};
    }

    @Get(':gameId')
    async findOne(@Param('gameId') gameId: string) {
        const result = await this.gamesService.findOne(+gameId);
        return {data: result};
    }
}