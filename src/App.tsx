import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const Home = () => {
    return <div>Home Page Content</div>;
};

const AboutMe = () => {
    return <div>About Me Content</div>;
};

const MyWork = () => {
    return <div>My Work Content</div>;
};

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-me">About Me</Link></li>
                <li><Link to="/my-work">My Work</Link></li>
            </ul>
        </nav>
    );
};

export function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/my-work" element={<MyWork />} />
            </Routes>
        </Router>
    );
}

export default App;
