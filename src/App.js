import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/feed';
import Post from "./pages/addpost";
// import NoPage from "./pages/nopage";  


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}>
          <Route path="post" element={<Post />} />
          {/* <Route path="*" element={<NoPage />} />  */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;