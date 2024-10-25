import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from './pages/App.jsx';
import Blog from './pages/Blog.jsx';

function Pages() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/blog" element={<Blog />}/>
            </Routes>
        </Router>
    );
}

export default Pages;