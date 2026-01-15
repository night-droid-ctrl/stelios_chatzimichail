import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Teaching from './components/Teaching';
import Outreach from './components/Outreach';
import Publications from './components/Publications';
import Contact from './components/Contact';
import CV from './components/CV';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Teaching />
        <Outreach />
        <CV />
        <Publications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
