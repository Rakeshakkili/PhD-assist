import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h2>Your Research, Our Expertise</h2>
                <p>Connecting PhD assistants with clients to manage projects, offer data analysis, and more.</p>
                <Link to="/register" className="btn">Register</Link>
            </div>
        </section>
    );
}

export default Hero;
