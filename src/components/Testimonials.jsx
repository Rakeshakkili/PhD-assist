import React from 'react';
import "../styles/Testimonials.css";


function Testimonials() {
    const testimonials = [
        { title: 'Alex P., PhD Candidate', feedback: 'PhD Assist helped me complete my research on time and with great accuracy.'},
        { title: 'Dr. Maria S., Research Scientist', feedback: 'Their data analysis services are top-notch. Highly recommended.'},
        { title: 'John D., Postdoctoral Fellow', feedback: 'The writing and editing services are exceptional, making my publications stand out.' },
        { title: 'Emily R., Academic Author', feedback: 'Excellent support throughout the research process. I couldn\'t have done it without them.' },
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <h2>What Our Clients Say</h2>
                <div className="testimonials-grid">
                    {testimonials.map((testimonials, index) => (
                        <div key={index} className="testimonial-item">
                            <p>"{testimonials.feedback}"</p>
                            <h4>- {testimonials.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;