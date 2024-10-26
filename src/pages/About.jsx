import React from 'react';
import '../styles/About.css';

function About() {
    return (
        <section className="about">
            <div className="container">
                <h2>About PhD Assist</h2>
                <p>PhD Assist connects PhD students, researchers, and professionals with expert assistance to manage research projects, data analysis, writing, and more.</p>
                
                <div className="team-section">
                    <h3>Our Team</h3>
                    <div className="team-grid">
                        <div className="team-member">
                            <img src="/path/to/image1.jpg" alt="Team Member 1"/>
                            <h4>Dr. John Doe</h4>
                            <p>Founder & Chief Research Officer</p>
                        </div>
                        <div className="team-member">
                            <img src="/path/to/image2.jpg" alt="Team Member 2"/>
                            <h4>Jane Smith</h4>
                            <p>Head of Data Analysis</p>
                        </div>
                       
                    </div>
                </div>

                <div className="mission-vision-section">
                    <h3>Our Vision & Mission</h3>
                    <p>Our mission is to empower researchers and academics by providing top-notch support services to make their research process smoother and more efficient.</p>
                    <p>We envision a world where every researcher has access to the resources and assistance they need to succeed in their academic endeavors.</p>
                </div>

                <div className="why-choose-us-section">
                    <h3>Why Choose Us?</h3>
                    <ul>
                        <li>Expert assistance from seasoned professionals</li>
                        <li>Comprehensive support from project management to publication</li>
                        <li>Tailored services to meet individual research needs</li>
                        <li>Dedicated support throughout the research journey</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;
