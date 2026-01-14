import React from 'react';
import researchImg from '../assets/research.png';

const Research = () => {
    const projects = [
        {
            title: "Rapid AMR Diagnostics",
            description: "Developing novel diagnostics for antibiotic resistance using single-cell imaging, microfluidics, and deep learning.",
            tags: ["AI/ML", "Microfluidics", "Diagnostics"]
        },
        {
            title: "Single-Molecule Biophysics",
            description: "Studying the mechanisms of gene expression and microbial systems in real-time using advanced fluorescence microscopy.",
            tags: ["Biophysics", "Microscopy", "Genetics"]
        },
        {
            title: "Mathematical Modeling",
            description: "Computational modeling of biological systems for image and signal processing in medical applications.",
            tags: ["Modeling", "Signal Processing", "Medicine"]
        }
    ];

    return (
        <section id="research" style={{ background: '#f8f9fa' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Current Research</h2>

            <div className="glass" style={{
                marginBottom: '50px',
                borderRadius: '20px',
                overflow: 'hidden',
                padding: '0',
                border: 'none',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
                <img
                    src={researchImg}
                    alt="Research Visualization"
                    style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover',
                        display: 'block'
                    }}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                {projects.map((project, index) => (
                    <div key={index} className="glass" style={{ padding: '30px', borderRadius: '15px', background: 'white' }}>
                        <h3 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '0.95rem' }}>{project.description}</p>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {project.tags.map(tag => (
                                <span key={tag} style={{
                                    background: 'rgba(0, 33, 71, 0.05)',
                                    color: 'var(--primary)',
                                    padding: '5px 12px',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: 600
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Research;
