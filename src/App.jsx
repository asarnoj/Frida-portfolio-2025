import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Sketchbooks from './pages/Sketchbooks';
import About from './pages/About';
import ProjectPage from './pages/ProjectPage';
import SketchbookPage from './pages/SketchbookPage';

const App = () => (
    <Router>
        <nav>
            <Link to="/">Frida Meschke</Link>
            <div className='nav-pages'>
                <Link to="/projects">Projects</Link>
                <Link to="/sketchbooks">My Sketchbooks</Link>
                <Link to="/about">About</Link>
                <a href="mailto:frida@meschke.se">Contact</a>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectPage />} /> {/* Dynamic route for proejct page */}
            <Route path="/sketchbooks" element={<Sketchbooks />} />
            <Route path="/sketchbooks/:id" element={<SketchbookPage />} /> {/* Dynamic route for sketchbook page */}
            <Route path="/about" element={<About />} />
        </Routes>
    </Router>
);

export default App;