import React from 'react';

const CV = () => {
    return (
        <section id="cv" style={{ background: '#f8f9fa' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                    <h2 style={{ margin: 0 }}>Curriculum Vitae</h2>
                    {/* Placeholder for PDF download if user provides one later */}
                </div>

                <div className="glass" style={{ padding: '50px', borderRadius: '20px', background: 'white' }}>

                    {/* Header */}
                    <div style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '5px' }}>Stelios Chatzimichail</h3>
                        <p style={{ color: 'var(--text-muted)' }}>chatzimichail.stelios@ucy.ac.cy</p>
                        <p style={{ marginTop: '15px' }}>
                            I am a Postdoctoral Research Fellow with expertise in single-molecule microscopy and microfluidics. In my research I build bespoke microfluidics and optical instrumentation to study complex biological samples, with applications to antimicrobial resistance (e.g., drug response, vesicles, horizontal gene transfer) and point-of-need diagnostics.
                        </p>
                        <div style={{ marginTop: '15px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            <strong>Languages:</strong> Greek (Native), English (Fluent)
                        </div>
                    </div>

                    {/* Posts Held */}
                    <div style={{ marginBottom: '40px' }}>
                        <h4 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '20px', borderLeft: '4px solid var(--secondary)', paddingLeft: '10px' }}>Posts Held</h4>

                        <div style={{ marginBottom: '25px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <strong>MSCA-Onisilos Research Fellow in Antimicrobial Resistance Surveillance</strong>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>2025 - Present</span>
                            </div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '5px' }}>Fatta-Kassinos and Koliou Groups, University of Cyprus, Cyprus</div>
                            <p style={{ fontSize: '0.95rem' }}>
                                Development of microfluidic systems for the surveillance of Antimicrobial Resistance and Horizontal Gene Transfer in Clinical and Environmental Samples.
                            </p>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <strong>Postdoctoral Research Associate in Antimicrobial Resistance Diagnostics</strong>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>2021 - 2024</span>
                            </div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '5px' }}>Kapanidis group, University of Oxford, United Kingdom</div>
                            <p style={{ fontSize: '0.95rem' }}>
                                Development of a rapid diagnostic microfluidic platform for identification and antimicrobial susceptibility testing of pathogens found in bacterial isolates using molecular barcoding and microscopy methods.
                            </p>
                        </div>

                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <strong>Postdoctoral Research Associate in Miniaturised HPLC Platforms</strong>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>2019 - 2021</span>
                            </div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '5px' }}>Salehi-Reyhani group, Imperial College London, United Kingdom</div>
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
                                First Class Honours, Departmental Prize for Outstanding Overall Performance<br />
                                Thesis title: Design of Molecularly Imprinted Electrochemical Aptasensors
                            </p>
                        </div>
                    </div>

                    {/* Awards */}
                    <div style={{ marginBottom: '40px' }}>
                        <h4 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '20px', borderLeft: '4px solid var(--secondary)', paddingLeft: '10px' }}>Awards, Honours & Prizes (Total €291.3K)</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {[
                                { year: '2024', amount: '€151k', title: 'ONISILOS H2020-MSCA COFUND: Postdoctoral Fellowship [main applicant]' },
                                { year: '2023', amount: '£25k', title: "Kavli Institute KARD FUND KINsD's Award to work on EV imaging [main applicant]" },
                                { year: '2022', amount: '£82k', title: 'EPSRC IAA Technology fund: Microfluidics-driven technologies for rapid detection of antimicrobial resistance in the clinic. [co-applicant]' },
                                { year: '2020', amount: '£5k', title: "Cutler’s Surgical Prize Award winners 2020 for a custom paediatric hand retractor" },
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

                    {/* Reviewing */}
                    <div>
                        <h4 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '20px', borderLeft: '4px solid var(--secondary)', paddingLeft: '10px' }}>Reviewing Activities</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            {['Nature Communications', 'ACS Sensors', 'Lab on a Chip', 'Royal Society Open Science', 'Analytical Sciences'].map((journal, i) => (
                                <li key={i} className="glass" style={{ padding: '8px 15px', borderRadius: '15px', fontSize: '0.9rem', background: '#f8f9fa' }}>
                                    {journal}
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
