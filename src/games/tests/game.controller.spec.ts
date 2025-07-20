import { mockGame } from "../../utils/tests/mocks/game.mock";
import { GamesController } from "../games.controller"
import { GamesService } from "../games.service"
import { Test, TestingModule } from "@nestjs/testing";

describe('GameController', () => {
    let controller: GamesController;
    let service: GamesService;

    const mockGames = [mockGame, {...mockGame, g_id: 1}]

    const mockGameService = {
        findAll: jest.fn().mockResolvedValue(mockGames),
        findOne: jest.fn().mockImplementation((g_id: number) => {
            return Promise.resolve(mockGames.find(game => game.g_id === g_id))
        })
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [GamesController],
            providers: [
                {
                    provide: GamesService,
                    useValue: mockGameService
                }
            ]
        }).compile()
        controller = module.get<GamesController>(GamesController);
        service = module.get<GamesService>(GamesService)
    })

    it('should get all games', async () => {
        const result = await controller.findAll();
        expect(service.findAll).toHaveBeenCalled();
        expect(result).toEqual(mockGames);
    })

    it('should get 1 game in detail', async () => {
        const result = await controller.findOne('1');
        expect(service.findOne).toHaveBeenCalledWith(1);
        expect(result).toEqual(mockGames[1])
    })
})