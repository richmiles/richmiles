import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Me from './components/Me';
import Site from './components/Site';
import Work from './components/Work';

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
