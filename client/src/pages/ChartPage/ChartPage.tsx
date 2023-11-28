import React from 'react';
import { ChartComponent } from '../../components';
import { useGetSongsByTop } from '../../hooks';
import { formatDuration } from '../../utils';
interface SongData {
  song: {
    songName: string;
    songImageName: string;
    songArtist: string | null;
    songDuration: number;
  };
  isCurrentUserLiked: boolean;
}
interface ChartItem {
  title: string;
  img: string;
  artist: string;
  length: string;
  isLiked: boolean;
}

export default function ChartPage() {
  const { data: res, isLoading } = useGetSongsByTop();

  if (isLoading) return <div>Loading...</div>;

  const songs: ChartItem[] =
    res?.data?.map((item: SongData) => ({
      title: item.song.songName,
      img: `http://localhost:5173/upload/songImg/${item.song.songImageName}`,
      artist: item.song.songArtist || 'Unknown Artist',
      length: formatDuration(item.song.songDuration),
      isLiked: item.isCurrentUserLiked,
      _id: item.song._id
    })) || [];

  return <ChartComponent items={songs} onLikeToggle={handleLikeToggle}  title="차트" />;
}
