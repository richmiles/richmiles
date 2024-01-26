import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import background from './images/background.png';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Me from './components/Me';
import Site from './components/Site';
import Work from './components/Work';

export function App() {
  return (
    <Router>
      <div className="relative min-h-screen"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
        }}
      >
        {/* Blur background */}
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: `blur(5px)`,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/me" element={<Me />} />
            <Route path="/site" element={<Site />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
