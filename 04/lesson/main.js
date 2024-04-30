import {data, subscribe} from "./data/data.js"
import {Todolist} from "./components/Todolist.js"

export function refreshUI() {
    const todolistElement = Todolist(data)
    const rootElement = document.getElementById("root")
    rootElement.innerHTML = ""
    rootElement.append(todolistElement)
}
refreshUI()
subscribe(refreshUI)