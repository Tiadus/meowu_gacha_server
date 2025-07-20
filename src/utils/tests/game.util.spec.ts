import { transformGame } from "../game.utils";
import { Game } from "src/games/game.entity";
import { mockGame } from "./mocks/game.mock";
import { transformedGame } from "./mocks/game.transformed.mock";

describe('transformGame', () => {
    it('should transform the structure of the game', () => {
        expect(transformGame(mockGame as Game)).toEqual(transformedGame);
    })
})