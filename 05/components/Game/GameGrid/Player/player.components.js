import {validatePlayerNumbersOrThrow} from "../../../../data.js";


export function Player(playerNumber) {
    validatePlayerNumbersOrThrow(playerNumber)
    const element = document.createElement("img")
    element.src = `assets/images/player${playerNumber}.png`
    element.width = 40
    element.height = 40
    element.alt = "player1";
    return element
}