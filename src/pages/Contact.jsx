import React from 'react';
import "../styles/ContactUs.css";

function ContactUs() {
    return (
        <section className="contact-us">
            <div className="container">
                <h2>Contact Us</h2>
                <p>We are here to assist you with any inquiries, feedback, or support you may need. Reach out to us through any of the following methods, and we’ll get back to you as soon as possible.</p>

                <div className="contact-details">
                    <div className="contact-item">
                        <h3>Address</h3>
                        <p>KPHB colony, RoadNo: 03, HYDERABAD</p>
                        <p>Located near the central library, across from the science building.</p>
                    </div>
                    <div className="contact-item">
                        <h3>Phone</h3>
                        <p>+91 8639512428</p>
                        <p>Available Monday to Friday, 9 AM - 5 PM.</p>
                    </div>
                    <div className="contact-item">
                        <h3>Email</h3>
                        <p><a href="mailto:info@phdassist.com">info@phdassist.com</a></p>
                        <p>We aim to respond to all emails within 24 hours.</p>
                    </div>
                    <div className="contact-item">
                        <h3>Office Hours</h3>
                        <p>Monday - Friday: 9 AM - 5 PM</p>
                        <p>Closed on weekends and public holidays.</p>
                    </div>
                </div>

                <div className="contact-form">
                    <h3>Send Us a Message</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="btn">Send Message</button>
                    </form>
                </div>

                <div className="map">
                    <h3>Find Us</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11894.786695715477!2d78.39920982742665!3d17.491534334640466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s123%20Research%20Lane%2C%20Academic%20City%2C%20AC%2045678!5e0!3m2!1sen!2sus!4vYOUR_TIMESTAMP"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="feedback">
                    <h3>We Value Your Feedback</h3>
                    <p>Share your thoughts on how we can improve our services. Your feedback is crucial to us and helps us serve you better.</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="feedback">Your Feedback</label>
                            <textarea id="feedback" name="feedback" rows="4" placeholder="Share your feedback here..." required></textarea>
                        </div>
                        <button type="submit" className="btn">Submit Feedback</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
