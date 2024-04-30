import {GameGrid} from "./components/GameGrid/game-grid.components.js";
import {ResultPanel} from "./components/ResultPanel/result-panel.components.js";
import {addEventListener, GAME_STATES, getGameState, start} from "./data.js";
import {Settings} from "./components/Settings/settings.components.js";
import {Win} from "./components/Win/win.components.js";
import {Lose} from "./components/Lose/lose.components.js";

export function rerender() {
    const rootElement = document.getElementById("root")
    rootElement.innerHTML = ""
    const gameState = getGameState()
    switch (gameState) {
        case GAME_STATES.IN_PROGRESS:
            rootElement.append(ResultPanel(), GameGrid())
            break
        case GAME_STATES.SETTINGS:
            rootElement.append(Settings())
            break
        case GAME_STATES.WIN:
            rootElement.append(Win())
            break
        case GAME_STATES.LOSE:
            rootElement.append(Lose())
            break
        default: {
            throw new Error("Not supported state")
        }
    }


}

rerender()
// start()
addEventListener(rerender)
