import React from 'react';
import aboutImg from '../assets/about.png';

const About = () => {
    return (
        <section id="about">
            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
                <div className="glass" style={{ padding: '40px', borderRadius: '20px', background: 'white' }}>
                    <h2 style={{ marginBottom: '20px' }}>About Me</h2>
                    <p style={{ marginBottom: '20px', fontSize: '1.05rem' }}>
                        I am a <strong>Post-doctoral Fellow</strong> at the <strong>University of Oxford</strong>, Department of Physics, and a member of the <strong>Kapanidis Group</strong> at the Kavli Institute for Nanoscience Discovery.
                    </p>
                    <p style={{ marginBottom: '20px', fontSize: '1.05rem' }}>
                        My work sits at the intersection of <strong>single-molecule biophysics</strong>, <strong>AI/ML in medicine</strong>, and <strong>mechanical engineering</strong>. I hold a PhD from the University of Cyprus, where I focused on microfluidics and single-cell analysis.
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
