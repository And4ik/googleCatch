import {GAME_STATES, getGameState, movePlayers, MOVING_DIRECTIONS} from "../../data.js";
import {Settings} from "./Settings/settings.components.js";
import {ResultPanel} from "./ResultPanel/result-panel.components.js";
import {GameGrid} from "./GameGrid/game-grid.components.js";
import {Win} from "./Win/win.components.js";
import {Lose} from "./Lose/lose.components.js";

document.addEventListener("keyup", (event) => {
    switch (event.code) {
        case "ArrowLeft": {
            movePlayers(1, MOVING_DIRECTIONS.LEFT)
            break
        }
        case "ArrowRight": {
            movePlayers(1, MOVING_DIRECTIONS.RIGHT)
            break
        }
        case "ArrowUp": {
            movePlayers(1, MOVING_DIRECTIONS.UP)
            break
        }
        case "ArrowDown": {
            movePlayers(1, MOVING_DIRECTIONS.DOWN)
            break
        }
        case "KeyA": {
            movePlayers(2, MOVING_DIRECTIONS.LEFT)
            break
        }
        case "KeyD": {
            movePlayers(2, MOVING_DIRECTIONS.RIGHT)
            break
        }
        case "KeyW": {
            movePlayers(2, MOVING_DIRECTIONS.UP)
            break
        }
        case "KeyS": {
            movePlayers(2, MOVING_DIRECTIONS.DOWN)
            break
        }
    }
})

export function Game() {
    const element = document.createElement("div")
    const gameState = getGameState()
    switch (gameState) {
        case GAME_STATES.IN_PROGRESS:
            element.append(ResultPanel(), GameGrid())
            break
        case GAME_STATES.SETTINGS:
            element.append(Settings())
            break
        case GAME_STATES.WIN:
            element.append(Win())
            break
        case GAME_STATES.LOSE:
            element.append(Lose())
            break
        default: {
            throw new Error("Not supported state")
        }
    }
    return element
}