import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import TentangKami from './pages/TentangKami/TentangKami';
import Program from './pages/Program/Program';
import Galeri from './pages/Galeri/Galeri';
import Kontak from './pages/Kontak/Kontak';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/program" element={<Program />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;