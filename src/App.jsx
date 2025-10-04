import { useState } from 'react'
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';

function App() {

  return (
    <BrowserRouter>
      {/* 👇 This should be here, outside Routes */}
      <ScrollToTop />

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
