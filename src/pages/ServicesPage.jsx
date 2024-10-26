import React from 'react';
import '../styles/ServicesPage.css'; 

const Services = () => {
  const services = [
    {
      title: 'Research Consultation',
      description: 'Receive expert advice and support on your research projects from experienced researchers and professors.',
      icon: '🔬'
    },
    {
      title: 'Writing Assistance',
      description: 'Get help with writing research papers, theses, and dissertations, including editing and proofreading services.',
      icon: '📝'
    },
    {
      title: 'Data Analysis',
      description: 'Access tools and expertise for analyzing your research data, including statistical analysis and interpretation.',
      icon: '📊'
    },
    {
      title: 'Grant Writing',
      description: 'Get assistance with writing and submitting grant proposals to secure funding for your research projects.',
      icon: '💰'
    },
    {
      title: 'Workshops and Seminars',
      description: 'Participate in workshops and seminars to enhance your research skills and stay updated with the latest trends in your field.',
      icon: '🎓'
    }
  ];

  return (
    <section className="services-page services">
      <h1>Our Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
