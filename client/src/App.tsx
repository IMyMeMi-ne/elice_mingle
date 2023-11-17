import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LandingPage,
  SignUpPage,
  FeedPage,
  ChartPage,
  PlaylistPage,
  RecommendPlaylistPage,
  UploadModalTestPage,
} from "./pages";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="signup" element={<SignUpPage />}></Route>
          <Route path="/feed" element={<FeedPage />}></Route>
          <Route path="/chart" element={<ChartPage />}></Route>
          <Route path="/playlist" element={<PlaylistPage />}></Route>
          <Route
            path="/recommendPlaylist"
            element={<RecommendPlaylistPage />}
          ></Route>
          <Route path="/upload" element={<UploadModalTestPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
