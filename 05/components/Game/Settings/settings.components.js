import {start} from "../../../data.js";

export function Settings() {
    const element = document.createElement("div")
    const startButton = document.createElement("button")
    startButton.append("Start")
    startButton.addEventListener("click", ()=> {start()})

//     const select = document.createElement("select")
//     const option1 = document.createElement("option");
//     option1.text = "Option 1";
//     option1.value = "option1";
//
//     const option2 = document.createElement("option");
//     option2.text = "Option 2";
//     option2.value = "option2";
//
// // Добавление вариантов к элементу <select>
//     select.add(option1);
//     select.add(option2);


    element.append(startButton)
    return element
}
