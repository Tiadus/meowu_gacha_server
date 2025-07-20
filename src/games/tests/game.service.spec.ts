import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { GamesService } from '../games.service';
import { Game } from '../game.entity';
import { mockGame } from '../../utils/tests/mocks/game.mock';
import { transformGame } from '../../utils/game.utils';

describe('GamesService', () => {
    let service: GamesService;

    const mockGames = [{...mockGame, g_id:1}, mockGame];

    const mockGameRepo = {
        find: jest.fn().mockResolvedValue(mockGames),
        findOne: jest.fn().mockImplementation(({ where: {g_id}}) => 
            Promise.resolve(mockGames.find((game) => game.g_id === g_id))
        ),
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                GamesService,
                {
                    provide: getRepositoryToken(Game),
                    useValue: mockGameRepo,
                },
            ],
        }).compile();

        service = module.get<GamesService>(GamesService);
    });

    it('should fetch all users', async () => {
        const result = await service.findAll();
        expect(mockGameRepo.find).toHaveBeenCalled();
        expect(result).toEqual(mockGames)
    })

    it('should fetch and transform the structure of a single game by id', async () => {
        const result = await service.findOne(0);
        expect(mockGameRepo.findOne).toHaveBeenCalledWith({ 
            where: { g_id:0 },
            relations: ['game_characters', 'banners', 'banners.banner_characters', 'banners.banner_characters.game_character', 'banners.bpss', 'banners.bpss.gps']
        });
        expect(result).toEqual(transformGame(mockGames[1] as Game))
    })
})