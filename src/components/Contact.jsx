import React from 'react';

const Contact = () => {
    return (
        <section id="contact" style={{ textAlign: 'center' }}>
            <h2 style={{ marginBottom: '20px' }}>Get in Touch</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                I'm always open to discussing research collaborations, academic inquiries, or opportunities in the field of biophysics and AI diagnostics.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                <a href="mailto:stelios.chatzimichail@physics.ox.ac.uk" className="glass" style={{
                    padding: '20px 40px',
                    borderRadius: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    minWidth: '250px'
                }}>
                    <span style={{ fontSize: '1.5rem' }}>✉️</span>
                    <strong>Email</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>stelios.chatzimichail@physics.ox.ac.uk</span>
                </a>

                <a href="https://www.linkedin.com/in/stelioschatzimichail/" target="_blank" rel="noopener noreferrer" className="glass" style={{
                    padding: '20px 40px',
                    borderRadius: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    minWidth: '250px'
                }}>
                    <span style={{ fontSize: '1.5rem' }}>🔗</span>
                    <strong>LinkedIn</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Digital Professional Profile</span>
                </a>
            </div>

            <footer style={{ marginTop: '100px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                © {new Date().getFullYear()} Stelios Chatzimichail. All rights reserved. | Built at Oxford.
            </footer>
        </section>
    );
};

export default Contact;
