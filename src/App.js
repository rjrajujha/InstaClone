import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Feed from './pages/feed';
import Post from "./pages/addpost";
import NoPage from './pages/nopage'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
            <Route path="/post" element={<Post />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;