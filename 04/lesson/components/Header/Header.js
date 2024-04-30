export function Header(todoListTitle) {
    const container = document.createElement("h1")
    container.append(todoListTitle)
    return container
}
