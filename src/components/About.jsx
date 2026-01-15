import React from 'react';
import aboutImg from '../assets/about.png';

const About = () => {
    return (
        <section id="about">
            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
                <div className="glass" style={{ padding: '40px', borderRadius: '20px', background: 'white' }}>
                    <h2 style={{ marginBottom: '20px' }}>About Me</h2>
                    <p style={{ marginBottom: '20px', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        I am a <strong>MSCA-Onisilos Research Fellow</strong> at the <strong>University of Cyprus</strong> (Fatta-Kassinos and Koliou Groups).
                        Previously, I was a Postdoctoral Research Associate at the University of Oxford (Kapanidis Group) and Imperial College London (Salehi-Reyhani Group).
                    </p>
                    <p style={{ marginBottom: '20px', fontSize: '1rem', lineHeight: '1.6' }}>
                        My research focuses on <strong>single-molecule biophysics</strong>, <strong>microfluidics</strong>, and <strong>AI/ML in medicine</strong>.
                        I specialize in developing next-generation diagnostics for Antimicrobial Resistance (AMR) using single-cell imaging and deep learning.
                    </p>
                    <p style={{ fontSize: '1.05rem' }}>
                        Currently, I am developing next-generation diagnostics for <strong>Antimicrobial Resistance (AMR)</strong> using single-cell imaging and deep learning to enable rapid, life-saving clinical decisions.
                    </p>
                </div>
                <div className="glass" style={{
                    padding: '15px',
                    borderRadius: '25px',
                    background: 'rgba(255, 255, 255, 0.5)',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <img
                        src={aboutImg}
                        alt="Stelios Chatzimichail in the Lab"
                        style={{
                            width: '100%',
                            borderRadius: '20px',
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
