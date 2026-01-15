import React from 'react';

const Navbar = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--primary)' }}>
        Stelios Chatzimichail
      </div>
      <ul style={{ display: 'flex', gap: '30px' }}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#research">Research</a></li>
        <li><a href="#teaching">Teaching</a></li>
        <li><a href="#outreach">Outreach</a></li>
        <li><a href="#cv">CV</a></li>
        <li><a href="#publications">Publications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
