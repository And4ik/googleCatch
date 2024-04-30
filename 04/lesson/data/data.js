export const data = {
    todolist: {
        id: crypto.randomUUID(),
        title: "Todolist:",
        tasks: [
            {
                id: crypto.randomUUID(),
                title: "Learn HTML",
            },
            {
                id: crypto.randomUUID(),
                title: "Learn CSS",
            },
            {
                id: crypto.randomUUID(),
                title: "Learn Js",
            },
            {
                id: crypto.randomUUID(),
                title: "Learn React",
            }
        ],
        addNewTaskDialog: {
            isOpen:false
        }
    }
}

let notifySubscriber = function (){}
export function subscribe(subscriber) {
    notifySubscriber = subscriber
}
export function deleteTask(taskId) {
    const tasks = data.todolist.tasks
    data.todolist.tasks = tasks.filter(t=> t.id !== taskId)
    notifySubscriber() //refreshUI
}

export function addTask(taskTitle) {
    const newTask =   {
        id: crypto.randomUUID(),
        title: taskTitle
    }
    data.todolist.tasks.push(newTask)
    // data.todolist.tasks= [ ...data.todolist.tasks, newTask]
    notifySubscriber() //refreshUI
}
export function openAddNewTaskDialog() {
    data.todolist.addNewTaskDialog.isOpen = true
    notifySubscriber() //refreshUI
}

export function closeAddNewTaskDialog() {
    data.todolist.addNewTaskDialog.isOpen = false
    notifySubscriber() //refreshUI
}