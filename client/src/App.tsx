import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LandingPage,
  FeedPage,
  ChartPage,
  PlaylistPage,
  RecommendPlaylistPage,
  UploadModalTestPage,
  Mypage,
  LayoutPage,
} from "./pages";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/feed" element={<FeedPage />}></Route>
            <Route path="/chart" element={<ChartPage />}></Route>
            <Route path="/playlist" element={<PlaylistPage />}></Route>
            <Route
              path="/recommendPlaylist"
              element={<RecommendPlaylistPage />}
            ></Route>
            <Route path="/mypage" element={<Mypage />}></Route>
          </Route>
          <Route path="/upload" element={<UploadModalTestPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
