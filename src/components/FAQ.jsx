import React from 'react';
import "../styles/FAQ.css";

function FAQ() {
    const faqs = [
        {
            question: 'How do I apply for research assistance?',
            answer: 'To apply for research assistance, fill out our online application form on the "Apply" page and provide details about your research needs.'
        },
        {
            question: 'What services do you offer?',
            answer: 'We offer a range of services including project management, data analysis, writing/editing, and research assistance.'
        },
        {
            question: 'How can I get in touch with a consultant?',
            answer: 'You can contact a consultant through our "Contact Us" page or by emailing us directly at info@phdassist.com.'
        },
        // Add more FAQs here
    ];

    return (
        <section className="faq">
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
