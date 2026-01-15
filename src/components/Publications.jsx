import React from 'react';
import paper1Img from '../assets/paper1.png';
import paper2Img from '../assets/paper2.png';
import paper3Img from '../assets/paper3.png';

const Publications = () => {
    const papers = [
        {
            title: "Rapid identification of bacterial isolates using microfluidic adaptive channels and multiplexed fluorescence microscopy",
            journal: "Lab on a Chip",
            year: "2024",
            link: "https://doi.org/10.1039/D4LC00325J",
            image: paper1Img
        },
        {
            title: "Ribosome phenotypes for rapid classification of antibiotic-susceptible and resistant strains of Escherichia coli",
            journal: "Communications Biology",
            year: "2025",
            link: "https://www.nature.com/articles/s42003-025-07740-6",
            image: paper2Img
        },
        {
            title: "Absolute quantification of protein copy number in single cells with immunofluorescence microscopy calibrated using single-molecule microarrays",
            journal: "Analytical Chemistry",
            year: "2021",
            link: "https://doi.org/10.1021/acs.analchem.0c05177",
            image: paper3Img
        }
    ];

    return (
        <section id="publications">
            <h2 style={{ marginBottom: '40px', textAlign: 'center' }}>Selected Publications</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                {papers.map((paper, index) => (
                    <div key={index} className="glass" style={{
                        padding: '25px',
                        borderRadius: '20px',
                        transition: 'var(--transition)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        background: 'white',
                        height: '100%'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{
                            marginBottom: '20px',
                            padding: '10px',
                            background: '#f0f4f8',
                            borderRadius: '50%',
                            width: '120px',
                            height: '120px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <img src={paper.image} alt="Illustration" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                        </div>

                        <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--text)', flexGrow: 1 }}>{paper.title}</h3>

                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                            {paper.journal} • <strong>{paper.year}</strong>
                        </p>

                        <a href={paper.link} target="_blank" rel="noopener noreferrer" style={{
                            display: 'inline-block',
                            padding: '10px 25px',
                            borderRadius: '25px',
                            background: 'var(--primary)',
                            color: 'white',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            marginTop: 'auto'
                        }}>
                            View Paper
                        </a>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '50px', textAlign: 'center' }}>
                <a href="https://scholar.google.com/citations?user=dC1Xdw0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="glass" style={{
                    padding: '12px 30px',
                    borderRadius: '25px',
                    fontSize: '0.95rem',
                    fontWeight: 600
                }}>
                    Full List on Google Scholar
                </a>
            </div>
        </section>
    );
};

export default Publications;
