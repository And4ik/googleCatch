import {Header} from "./header/Header.js";
import {Count} from "./count/Count.js";
import {IncreaseButton} from "./buttons/IncreaseButton.js";
import {DecreaseButton} from "./buttons/DecreaseButton.js";


export function renderCounter() {
    document.body.innerHTML= "";

    document.body.append(Header())
    document.body.append(Count())
    document.body.append(IncreaseButton())
    document.body.append(DecreaseButton())

};