import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./pages/App.jsx";
import Blog from "./pages/Blog.jsx";
import ArtOne from "./pages/blogPages/ArtOne.jsx";
import GameComponent from "./pages/GameComponent.jsx";

function Pages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/artone" element={<ArtOne />} />
        <Route path="/game" element={<GameComponent/>}/>
      </Routes>
    </Router>
  );
}

export default Pages;
