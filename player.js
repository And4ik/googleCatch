const playList = {
    playListInfo: {
        title: "Hip-hop hits",
        coverImg: "./cover.avif"
    },
    tracks: [
        {
            trackId: "1",
            artistName: "Eminem",
            trackTitle: "Rap God",
            trackFileUrl: "./eminem_-_rap_god_(muztune.me).mp3",
            trackCoverImgUrl: "./eminem.jpg",
        },
        {
            trackId: "2",
            artistName: "50 Cent",
            trackTitle: "in-da-club",
            trackFileUrl: "./50cent_-_in_da_club_(muztune.me).mp3",
            trackCoverImgUrl: "./50cent.jpg",
        },
    ]
}
// const playListTitleElement = document.createElement("h1")
// playListTitleElement.innerText = playList.playListInfo.title
// document.body.append(playListTitleElement)
//
// const playListCoverElement = document.createElement("img")
// playListCoverElement.src = playList.playListInfo.coverImg
// playListCoverElement.style.width = "150px"
// playListCoverElement.style.height = "150px"
// document.body.append(playListCoverElement)
//
// const trackListElement = document.createElement("ul")
// for (let i = 0; i < playList.tracks.length; i++) {
//     const trackElement = document.createElement("li")
//     const trackCoverElement = document.createElement("img")
//     trackCoverElement.style.width = "150px"
//     trackCoverElement.style.height = "150px"
//
//     trackCoverElement.src = playList.tracks[i].trackCoverImgUrl
//
//     trackElement.append(trackCoverElement)
//     trackElement.append(playList.tracks[i].artistName + ": " + playList.tracks[i].trackTitle)
//     trackListElement.append(trackElement)
//
// }
// document.body.append(trackListElement)

function renderPlaylist (anyPlayList){
    renderPlayListHeader(anyPlayList.playListInfo)
    renderTracksList(anyPlayList.tracks)
}

function renderPlayListHeader(anyPlayListInfo) {
    const playListTitleElement = document.createElement("h1")
    playListTitleElement.innerText = anyPlayListInfo.title
    document.body.append(playListTitleElement)

    const playListCoverElement = document.createElement("img")
    playListCoverElement.src = anyPlayListInfo.coverImg
    playListCoverElement.style.width = "150px"
    playListCoverElement.style.height = "150px"
    document.body.append(playListCoverElement)
}
function renderTracksList(anyTrack) {
    const trackListElement = document.createElement("ul")
    for (let i = 0; i < anyTrack.length; i++) {
        const trackElement = createTrack(anyTrack[i])
        trackListElement.append(trackElement)
    }
    document.body.append(trackListElement)
}
function createTrack(anyTrack) {
    const trackElement = document.createElement("li")
    const trackCoverElement = document.createElement("img")
    trackCoverElement.style.width = "150px"
    trackCoverElement.style.height = "150px"
    trackCoverElement.src = anyTrack.trackCoverImgUrl

    const audio =document.createElement("audio")
    audio.src = anyTrack.trackFileUrl
    audio.controls = true
    trackElement.append(audio)

    trackElement.append(trackCoverElement)
    trackElement.append(anyTrack.artistName + ": " + anyTrack.trackTitle)
    return trackElement
}
renderPlaylist(playList)
