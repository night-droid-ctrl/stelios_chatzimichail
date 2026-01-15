import React from 'react';
import outreachIcon from '../assets/outreach_icon.png';

const Outreach = () => {
    return (
        <section id="outreach">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <img src={outreachIcon} alt="Outreach" style={{ height: '100px', marginBottom: '20px' }} />
                    <h2>Outreach & Events</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-muted)' }}>
                        Engaging with the scientific community and the public to promote understanding and collaboration.
                    </p>
                </div>

                <div style={{ display: 'grid', gap: '40px' }}>

                    <div className="glass" style={{ padding: '40px', borderRadius: '20px', background: 'white' }}>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: 'var(--primary)' }}>Infection Inspection (Citizen Science)</h3>
                        <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>
                            As part of the Gene Machines group’s AMR efforts, we created <em>Infection Inspection</em>, a project aiming to better understand AMR phenotypes. We employed citizen scientists to identify crucial image features for assessing antibiotic response.
                        </p>
                        <div style={{ background: '#f0f4f8', padding: '15px', borderRadius: '10px', display: 'inline-block' }}>
                            <strong>Impact:</strong> 5,273 users participated, classifying 1,045,199 images on Zooniverse.
                        </div>
                    </div>

                    <div className="glass" style={{ padding: '40px', borderRadius: '20px', background: 'white' }}>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: 'var(--primary)' }}>Oxford Biophysics Seminars (2022-2024)</h3>
                        <p style={{ lineHeight: '1.7' }}>
                            Served as seminar organizer and session chair for this lecture series at the Kavli Institute of Nanoscience (Oxford). The series brings together local and international speakers to foster community and collaboration among biophysicists.
                        </p>
                    </div>

                    <div className="glass" style={{ padding: '40px', borderRadius: '20px', background: 'white' }}>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: 'var(--primary)' }}>Physics of Life</h3>
                        <p style={{ lineHeight: '1.7' }}>
                            Regular participant in this annual event by the University of Oxford. I demonstrated experiments to the public, specifically using the ACBC microfluidic device to capture bacteria and visualize them with DNA/membrane dyes, promoting public understanding of physics in health.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Outreach;
