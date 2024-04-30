import {renderPlaylistTrack} from "./track/renderTrack.components.js";

export function renderPlayListTracks(tracks) {
    for (let i = 0; i < tracks.length; i++) {
        renderPlaylistTrack(tracks[i])
    }
}

