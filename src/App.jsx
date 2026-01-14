import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Publications from './components/Publications';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
