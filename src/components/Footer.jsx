import React from 'react';
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <h3>PhD Assist</h3>
                    <p>Connecting PhD assistants with clients for research and project management services.</p>
                    
                    <ul className="footer-links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>

                    <div className="social-links">
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                    </div>
                    
                    <p>&copy; 2024 PhD Assist. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
