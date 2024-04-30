

export function Button(title, onClickCallback) {
    const btnElement = document.createElement("button")
    btnElement.append(title)
    btnElement.addEventListener("click", onClickCallback)
    return btnElement


}