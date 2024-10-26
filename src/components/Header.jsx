import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';


function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link to="/">PhD Assist</Link>
                </div>
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/research-resources">Research Resources</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;