export function renderPlayListHeader(playlistForRendering) {
    renderPlaylistHeaderTitle(playlistForRendering)
    renderPlaylistHeaderCover(playlistForRendering)


}

function renderPlaylistHeaderCover(playlistForRendering) {
    const CoverElement = document.createElement("img")
    CoverElement.src = playlistForRendering.coverImageUrl
    CoverElement.style.width = "240px"
    CoverElement.style.height = "140px"
    document.body.append(CoverElement)
}

function renderPlaylistHeaderTitle(playlistForRendering) {
    const playListTitleElement = document.createElement("h1")
    playListTitleElement.append(playlistForRendering.title)
    document.body.append(playListTitleElement)
}