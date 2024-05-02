import {playAgain} from "../../../data.js";

export function Win() {
    const element = document.createElement("div")
    element.append("You win")

    const playAgainButton = document.createElement("button")
    playAgainButton.append("Play again")

    playAgainButton.addEventListener("click", ()=> {playAgain()})

    element.append(playAgainButton)
    return element
}
