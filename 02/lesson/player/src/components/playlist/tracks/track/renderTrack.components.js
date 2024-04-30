export function renderPlaylistTrack(inputTrackForRendering) {
    const trackElement = document.createElement("div")

    const trackTitleElement = document.createElement("div")
    if (inputTrackForRendering.loveTrack === true) {
        trackTitleElement.append("✔")
    }

    trackTitleElement.append(inputTrackForRendering.artistName + " - " + inputTrackForRendering.title)
    trackElement.append(trackTitleElement)

    const audioElement = document.createElement("audio")
    audioElement.src = inputTrackForRendering.fileUrl
    audioElement.controls = true
    trackElement.append(audioElement)

    const coverElement = document.createElement("img")
    coverElement.src = inputTrackForRendering.coverImageUrl
    coverElement.style = "border: 3px solid green"
    coverElement.style.height = "100px"
    coverElement.style.width = "75px"
    trackElement.append(coverElement)

    document.body.append(trackElement)
}