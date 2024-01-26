import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import Me from './Components/Me';
import Site from './Components/Site';
import Work from './Components/Work';

export function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/me" element={<Me />} />
                <Route path="/site" element={<Site />} />
                <Route path="/work" element={<Work />} />
            </Routes>
        </Router>
    );
}

export default App;
