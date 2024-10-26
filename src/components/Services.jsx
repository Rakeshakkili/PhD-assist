import React from 'react';
import "../styles/Services.css";

function Services() {
    const services = [
        { title: 'Project Management', description: 'Expert project management for your research needs.'},
        { title: 'Data Analysis', description: 'Comprehensive data analysis and interpretation.'},
        { title: 'Writing/Editing', description: 'Professional writing and editing services.'},
        { title: 'Research Assistance', description: 'Support in conducting and documenting research.'},
    ];

    return (
        <section className="home-services services" id="services">
            <div className="container">
                <h2>Our Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-item">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
