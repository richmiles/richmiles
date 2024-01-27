import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components_/NavBar';
import Home from './components_/Home';
import Me from './components_/Me';
import Site from './components_/Site';
import Work from './components_/Work';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-base to-darkblue">

          {/* Content */}
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/me" element={<Me />} />
            <Route path="/site" element={<Site />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
