import {Button} from "../Button/Button.js";
import {addTask, closeAddNewTaskDialog, data} from "../../data/data.js";

export function AddNewTaskDialog() {
    const container = document.createElement("dialog")
    container.open = data.todolist.addNewTaskDialog.isOpen

    const inputElement = document.createElement("input")
    const saveButton = Button("save", ()=>addTask(inputElement.value))
    const cancelButton = Button("cancel", closeAddNewTaskDialog)
    container.append(inputElement, saveButton,cancelButton)
    return container
}