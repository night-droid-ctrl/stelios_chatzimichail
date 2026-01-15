import React from 'react';
import research1 from '../assets/research1.png';
import research2 from '../assets/research2.png';
import research3 from '../assets/research3.png';
import research4 from '../assets/research4.png';
import research5 from '../assets/research5.png';

const Research = () => {
    const projects = [
        {
            title: "Rapid Identification of Bacterial Isolates",
            context: "Lab on a Chip (2024)",
            description: "This work demonstrated the use of a microfluidic device with adjustable channel heights (robotically controlled) to hydrodynamically trap bacteria and subsequently identify them with combinatorial FISH. My contribution for this work was in the conception of the study, design of the device, execution of experiments, code for hardware control and analysis of data, writing and submission of the manuscript. This work is particularly relevant as I will be adapting the 16S identification method for the spatial identification of bacteria in RWDS biofilms.",
            image: research1
        },
        {
            title: "Portable HPLC with Spectral Detection",
            context: "Nature Communications Chemistry (2021)",
            description: "While at Imperial College London, I developed portable HPLC systems equipped with broadband spectral detection and onboard classification algorithms. This technology represented the first portable HPLC system of its time with capabilities to identify markers on-the-field, enabling on-site detection of 24 polyaromatic hydrocarbons (PAHs) pollutants. This work is currently cited 35 times and noted by NASA researchers for its potential for organic biosignature detection in space.",
            image: research2
        },
        {
            title: "Absolute Protein Quantification in Single Cells",
            context: "Analytical Chemistry (2021)",
            description: "Developed this method during my PhD that enables quantitative determination of protein copy numbers in single-cells from immunofluorescence microscopy images. This metrology pipeline is enabled by linking the qualitative immunofluorescence measurements to quantitative measurements aided by single-molecule protein pulldown assays. These can serve as calibrations for total protein-copy number.",
            image: research3
        },
        {
            title: "Rapid AMR Prediction via Citizen Science",
            context: "Scientific Reports (2024)",
            description: "This study employed citizen scientists to help our team understand which bacterial features are most crucial when assessing antimicrobial susceptibility based on cellular landmark changes post-treatment. After a training tutorial, members of the public would see images of stained cells on the platform Zooniverse and would subsequently vote as to whether the image showed them a resistant or sensitive cell.",
            image: research4
        },
        {
            title: "Benchtop Microelectrode Fabrication",
            context: "Scientific Reports (2018)",
            description: "As part of my PhD work I developed a benchtop method to fabricate microelectrodes so as to achieve electrochemical lysis of cells in single-cell arrays for follow-on single-molecule pulldown assays. This benchtop approach helps democratize the development of electromechanical devices, particularly in low-resource settings which do not have access to clean room facilities.",
            image: research5
        }
    ];

    return (
        <section id="research">
            <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Research Projects</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
                {projects.map((project, index) => (
                    <div key={index} className="glass" style={{
                        padding: '35px',
                        borderRadius: '15px',
                        background: 'white',
                        display: 'flex',
                        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                        gap: '30px',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <div style={{ flex: '0 0 150px', display: 'flex', justifyContent: 'center' }}>
                            <img src={project.image} alt={project.title} style={{
                                width: '100%',
                                maxWidth: '150px',
                                borderRadius: '10px',
                                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                            }} />
                        </div>

                        <div style={{ flex: 1, borderLeft: index % 2 === 0 ? '4px solid var(--primary)' : 'none', borderRight: index % 2 !== 0 ? '4px solid var(--primary)' : 'none', paddingLeft: index % 2 === 0 ? '20px' : '0', paddingRight: index % 2 !== 0 ? '20px' : '0' }}>
                            <h3 style={{ marginBottom: '5px', fontSize: '1.4rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {project.context}
                            </p>
                            <p style={{ color: 'var(--text)', fontSize: '1rem', lineHeight: '1.7' }}>
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Research;
