import React from 'react';
import teachingIcon from '../assets/teaching_icon.png';

const Teaching = () => {
    return (
        <section id="teaching" style={{ background: '#f8f9fa' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <img src={teachingIcon} alt="Teaching" style={{ height: '100px', marginBottom: '20px' }} />
                    <h2>Teaching & Mentoring</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-muted)' }}>
                        My key achievements in teaching, mentoring, and supervision are illustrated through the design and delivery of educational programs, the guidance of graduate students, and the integration of new technologies.
                    </p>
                </div>

                <div className="glass" style={{ padding: '50px', borderRadius: '20px', background: 'white' }}>

                    {/* Course Design */}
                    <div style={{ marginBottom: '40px' }}>
                        <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ background: 'var(--secondary)', width: '8px', height: '30px', borderRadius: '4px', display: 'inline-block' }}></span>
                            Course Design & Delivery
                        </h3>

                        <div style={{ display: 'grid', gap: '25px' }}>

                            <div style={{ borderLeft: '2px solid #eee', paddingLeft: '20px' }}>
                                <h4 style={{ marginBottom: '5px' }}>Biophysics Practicals (2024)</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '10px' }}>University of Oxford</p>
                                <p>Designed and taught BP04 (3 hours/week), an 8-week practical course for 3rd-year Physics undergraduates introducing super-resolution microscopy (dSTORM and DNA-PAINT).</p>
                            </div>

                            <div style={{ borderLeft: '2px solid #eee', paddingLeft: '20px' }}>
                                <h4 style={{ marginBottom: '5px' }}>K-wire Hand Fracture Fixation (2021-2024)</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '10px' }}>St. Thomas’ Hospital, London</p>
                                <p>Co-developed a hands-on course using 3D printed biomimetic hand models for plastic surgeons. Badged by BSSH and BAPRAS.</p>
                            </div>

                            <div style={{ borderLeft: '2px solid #eee', paddingLeft: '20px' }}>
                                <h4 style={{ marginBottom: '5px' }}>University Teaching Assignments</h4>
                                <ul style={{ paddingLeft: '20px', fontSize: '0.95rem', color: 'var(--text)' }}>
                                    <li style={{ marginBottom: '8px' }}><strong>Teaching Assistant (2025-):</strong> Environmental Risk Assessment, University of Cyprus.</li>
                                    <li style={{ marginBottom: '8px' }}><strong>Optical Microscopy Demonstrator (2022-2024):</strong> 3rd year Physics practicals, University of Oxford.</li>
                                    <li><strong>Physical Chemistry Demonstrator (2016-2019):</strong> Laboratory experiments for ~160 students, Imperial College London.</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* Student Supervision */}
                    <div>
                        <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ background: 'var(--secondary)', width: '8px', height: '30px', borderRadius: '4px', display: 'inline-block' }}></span>
                            Student Supervision
                        </h3>
                        <p style={{ marginBottom: '20px' }}>Prioritizing mentorship to foster analytical and critical thinking skills in the next generation of scientists.</p>

                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                                <thead>
                                    <tr style={{ textAlign: 'left', borderBottom: '2px solid #eee' }}>
                                        <th style={{ padding: '10px', color: 'var(--text-muted)' }}>Student</th>
                                        <th style={{ padding: '10px', color: 'var(--text-muted)' }}>Role/Degree</th>
                                        <th style={{ padding: '10px', color: 'var(--text-muted)' }}>Period</th>
                                        <th style={{ padding: '10px', color: 'var(--text-muted)' }}>Institution</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { name: 'Sayed Saifuddin', degree: 'MSc CEE', period: '2025-present', uni: 'University of Cyprus' },
                                        { name: 'Katerina Koliantri', degree: 'BSc Physics', period: '2025-present', uni: 'University of Cyprus' },
                                        { name: 'Alison Farrar', degree: 'PhD Physics', period: '2021–2025', uni: 'University of Oxford' },
                                        { name: 'Faraz Rahimi', degree: 'PhD Chemistry', period: '2019–2021', uni: 'Imperial College London' },
                                        { name: 'Aliyah Saifuddin', degree: 'PhD Chemistry', period: '2019–2021', uni: 'Imperial College London' },
                                        { name: 'Vanessa Ho', degree: 'BSc Chemistry', period: '2017–2018', uni: 'Imperial College London' },
                                        { name: 'Pashiini Supramaniam', degree: 'MSci Chemistry', period: '2016–2017', uni: 'Imperial College London' }
                                    ].map((student, i) => (
                                        <tr key={i} style={{ borderBottom: '1px solid #f5f5f5' }}>
                                            <td style={{ padding: '12px 10px', fontWeight: 600 }}>{student.name}</td>
                                            <td style={{ padding: '12px 10px' }}>{student.degree}</td>
                                            <td style={{ padding: '12px 10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{student.period}</td>
                                            <td style={{ padding: '12px 10px' }}>{student.uni}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Teaching;
