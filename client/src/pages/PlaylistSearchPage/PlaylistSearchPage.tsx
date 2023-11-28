import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  PaginationComponent,
  PlaylistRecommendComponent,
} from '../../components';
import { useGetPlaylistsBySearch } from '../../hooks';

export default function SearchPage() {
  const location = useLocation();
  const keyword = location.state.keyword;
  const [pageNum, setPageNum] = useState(1);
  const { data, isLoading } = useGetPlaylistsBySearch(keyword, pageNum);
  return (
    <>
      {isLoading ? (
        <>로딩 중...</>
      ) : (
        <>
          <PlaylistRecommendComponent playlists={data?.searchPlayList} />
          {data?.searchPlayList && data?.searchPlayList.length > 0 ? (
            <PaginationComponent
              setPageNum={setPageNum}
              currentPage={pageNum}
              totalPages={data?.totalPages}
            />
          ) : null}
        </>
      )}
    </>
  );
}
