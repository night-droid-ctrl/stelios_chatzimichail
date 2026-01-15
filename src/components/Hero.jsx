import React from 'react';
import landingImg from '../assets/landing.png';

const Hero = () => {
    return (
        <section id="home" className="animate-fade-in" style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 33, 71, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
            paddingTop: '100px' // account for fixed navbar
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '60px',
                alignItems: 'center',
                maxWidth: '1200px',
                width: '100%'
            }}>
                <div style={{ textAlign: 'left' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '15px' }}>Stelios Chatzimichail</h1>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--secondary)', marginBottom: '15px', fontWeight: 500 }}>
                        MSCA-Onisilos Research Fellow
                    </h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '30px', maxWidth: '600px', lineHeight: '1.6' }}>
                        <strong>University of Cyprus</strong><br />
                        <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Previously: University of Oxford, Imperial College London</span>
                    </p>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <a href="#contact" className="glass" style={{
                            padding: '12px 30px',
                            borderRadius: '30px',
                            background: 'var(--primary)',
                            color: 'white',
                            fontWeight: 600
                        }}>
                            Get in Touch
                        </a>
                        <a href="#publications" className="glass" style={{
                            padding: '12px 30px',
                            borderRadius: '30px',
                            fontWeight: 600
                        }}>
                            View Publications
                        </a>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="glass" style={{
                        padding: '15px',
                        borderRadius: '25px',
                        background: 'rgba(255, 255, 255, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.6)'
                    }}>
                        <img
                            src={landingImg}
                            alt="Stelios Chatzimichail"
                            style={{
                                width: '100%',
                                maxWidth: '350px',
                                borderRadius: '20px',
                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
