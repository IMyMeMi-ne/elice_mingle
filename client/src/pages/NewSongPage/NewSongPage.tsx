import React from 'react';
import { ChartComponent } from '../../components';
import { useGetNewSongChart } from '../../hooks';
import { formatDuration } from '../../utils';
import { useNavigate } from 'react-router-dom';

export default function NewSongPage() {
  const { data: song, error } = useGetNewSongChart();
  const navigate = useNavigate();

  interface SongData {
    song: {
      _id: string;
      songName: string;
      songImageName: string;
      songArtist: string | null;
      songDuration: number;
    };
    isCurrentUserLiked: boolean;
  }

  interface ChartItem {
    _id: string;
    title: string;
    img: string;
    artist: string;
    length: string;
    isLiked: boolean;
  }

  if (error) {
    return <p>Error: {error.message} </p>;
  }

  const songs: ChartItem[] =
    song?.map((item: SongData) => ({
      _id: item.song._id,
      title: item.song.songName,
      img: '/img/AlbumSample.jpg',
      artist: item.song.songArtist || 'Unknown Artist',
      length: formatDuration(item.song.songDuration),
      isLiked: item.isCurrentUserLiked,
    })) || [];

  const handleItemClick = (id: string) => {
    const path = `/song/${id}`;
    navigate(path);
  };

  return (
    <ChartComponent
      items={songs}
      title="최신 음악"
      onItemClick={handleItemClick}
    />
  );
}
