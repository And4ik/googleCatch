
import {Taskslist} from "./Taskslist/Taskslist.js";
import {Header} from "./Header/Header.js";
import {Button} from "./Button/Button.js";
import {AddNewTaskDialog} from "./AddNewTaskDialog/AddNewTaskDialog.js";
import {openAddNewTaskDialog} from "../data/data.js";

export function Todolist(todolistData) {
    const container = document.createElement("div")
    const headerElement = Header(todolistData.todolist.title)
    const taskslistElement = Taskslist(todolistData.todolist.tasks)
    const addBtnElement = Button("+add", () =>openAddNewTaskDialog())
    const addNewTaskDialogElement = AddNewTaskDialog()
    container.append(headerElement,taskslistElement,addBtnElement,addNewTaskDialogElement)
    return container
}
