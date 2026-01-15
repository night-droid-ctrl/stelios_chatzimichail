import React from 'react';

const CV = () => {
    return (
        <section id="cv" style={{ background: '#f8f9fa' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                    <h2 style={{ margin: 0 }}>Curriculum Vitae</h2>
                    <a href="/cv.pdf" download className="glass" style={{
                        padding: '10px 20px',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        display: 'none' // Hidden until PDF is available
                    }}>
                        Download PDF
                    </a>
                </div>

                <div className="glass" style={{ padding: '50px', borderRadius: '20px', background: 'white' }}>

                    {/* Header */}
                    <div style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '5px' }}>Stelios Chatzimichail</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Stelios.chatzimichail@physics.ox.ac.uk</p>
                        <p style={{ marginTop: '15px' }}>
                            I am a postdoctoral researcher in Analytical Chemistry with expertise in instrument and sensor development for biomarker analysis. My interests lie in the development of platforms and sensors that help facilitate the measurement of analytes in chemical and biological systems.
                        </p>
                    </div>

                    {/* Posts Held */}
                    <div style={{ marginBottom: '40px' }}>
                        <h4 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '20px', borderLeft: '4px solid var(--secondary)', paddingLeft: '10px' }}>Posts Held</h4>

                        <div style={{ marginBottom: '25px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <strong>Postdoctoral Research Associate in Antimicrobial Resistance Diagnostics</strong>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>2021 - 2024</span>
                            </div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '5px' }}>Kapanidis group, University of Oxford, UK</div>
                            <p style={{ fontSize: '0.95rem' }}>
                                Development of a rapid diagnostic microfluidic platform for identification and antimicrobial susceptibility testing of pathogens found in liquid biopsies using molecular barcoding and microscopy methods.
                            </p>
                        </div>

                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <strong>Postdoctoral Research Associate in Miniaturised HPLC Platforms</strong>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>2019 - 2021</span>
                            </div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '5px' }}>Salehi-Reyhani group, Imperial College London, UK</div>
                            <p style={{ fontSize: '0.95rem' }}>
                                Development of portable HPLC systems with broadband spectral detection for on-the-field machine-learning guided sample identification.
                            </p>
                        </div>
                    </div>

                    {/* Education */}
                    <div style={{ marginBottom: '40px' }}>
                        <h4 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '20px', borderLeft: '4px solid var(--secondary)', paddingLeft: '10px' }}>Education</h4>

                        <div style={{ marginBottom: '25px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <strong>Imperial College London, PhD, Chemistry</strong>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>2015 - 2019</span>
                            </div>
                            <p style={{ fontSize: '0.95rem' }}>
                                Supervisors: Prof Oscar Ces and Dr Ali Salehi-Reyhani<br />
                                Thesis title: Towards A High-Throughput Microfluidic Single-Cell Proteomic Platform For Analysing Patient Blood Samples
                            </p>
                        </div>

                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <strong>Imperial College London, MSci Chemistry with Molecular Physics</strong>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>2011 - 2015</span>
                            </div>
                            <p style={{ fontSize: '0.95rem' }}>
                                First Class Honours<br />
                                Thesis title: Design of Molecularly Imprinted Electrochemical Aptasensors<br />
                                <em>Awarded Departmental Prize for Outstanding Overall Performance</em>
                            </p>
                        </div>
                    </div>

                    {/* Awards */}
                    <div style={{ marginBottom: '40px' }}>
                        <h4 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '20px', borderLeft: '4px solid var(--secondary)', paddingLeft: '10px' }}>Awards, Honours & Prizes (Total £311.4K)</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {[
                                { year: '2024', amount: '€190k', title: 'ONISILOS H2020-MSCA COFUND Early Career Fellowship [main applicant]' },
                                { year: '2023', amount: '£25k', title: "KARD FUND KINsD's Internal Award to work on EV detection [main applicant]" },
                                { year: '2022', amount: '£82k', title: 'EPSRC IAA Technology fund: Microfluidics-driven technologies for rapid detection of antimicrobial resistance in the clinic. [co-applicant]' },
                                { year: '2020', amount: '£5k', title: "Cutler’s Surgical Prize Award winners 2020" },
                                { year: '2016', amount: '£10k', title: 'Imperial College London Venture Catalyst Challenge winners 2016' },
                                { year: '2016', amount: '£2k', title: "Imperial College Business Partner's most promising start-up award" }
                            ].map((award, i) => (
                                <li key={i} style={{ marginBottom: '10px', fontSize: '0.95rem', display: 'grid', gridTemplateColumns: '50px 60px 1fr', gap: '10px' }}>
                                    <span style={{ color: 'var(--text-muted)' }}>{award.year}</span>
                                    <strong>{award.amount}</strong>
                                    <span>{award.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CV;
