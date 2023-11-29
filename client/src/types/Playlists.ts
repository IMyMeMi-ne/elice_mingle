import { SongDetail } from "./SongDetail";

export interface Playlists {
    _id: string,
    playListSongs: string[],
    playListTitle: string,
    playListExplain: string,
    playListOwner: string,
    playListImg: string,
    playListComments: string[],
    createdAt: Date,
    updatedAt: Date,
    like: boolean,
    likeCount: number,
    songDetails: SongDetail[],
}

