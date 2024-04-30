// import {Button} from "../../Button/Button.js;


import {Button} from "../../Button/Button.js";
import {deleteTask} from "../../../data/data.js";

export function Task(task) {

    const container = document.createElement("li")

    const deleteBtnElement = Button("x", ()=>deleteTask(task.id))
    container.append(task.title, deleteBtnElement)
    return container
}