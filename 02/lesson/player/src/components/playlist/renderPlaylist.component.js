import {renderPlayListHeader} from "./header/renderHeader.components.js";
import {renderPlayListTracks} from "./tracks/rentedTracks.components.js";

export function renderPlaylist(playlistForRendering) {
    renderPlayListHeader(playlistForRendering)
    renderPlayListTracks(playlistForRendering.tracks)

}


