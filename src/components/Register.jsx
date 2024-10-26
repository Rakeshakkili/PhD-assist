import React, { useState } from 'react';
import "../styles/Register.css"
import Swal from 'sweetalert2';

const Contact = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectTitle: '',
    projectDescription: '',
    services: [],
    otherService: '',
    budget: '',
    deadline: '',
    communication: '',
    additionalInfo: '',
    consent: false
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'services') {
      setFormState((prevState) => ({
        ...prevState,
        services: checked
          ? [...prevState.services, value]
          : prevState.services.filter((service) => service !== value)
      }));
    } else {
      setFormState({
        ...formState,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!formState.fullName || !formState.email || !formState.projectDescription || !formState.consent) {
      Swal.fire({
        title: "Error",
        text: "Please fill in all required fields.",
        icon: "error"
      });
      return;
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        access_key: "a8fe2570-a6bb-45ca-a83d-b987c256bc8b",
        ...formState
      })
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Form submitted successfully!",
        icon: "success"
      });
      setFormState({
        fullName: '',
        email: '',
        phone: '',
        projectTitle: '',
        projectDescription: '',
        services: [],
        otherService: '',
        budget: '',
        deadline: '',
        communication: '',
        additionalInfo: '',
        consent: false
      });
    }
  };

  return (
    <section className="contact">
      <h1 className="contact-title">Application Form</h1>
      <form onSubmit={onSubmit} className="contact-form">
        <section className="contact-section">
          <h2>Personal Information</h2>
          <label htmlFor="full-name">Full Name (Required)</label>
          <input
            type="text"
            id="full-name"
            name="fullName"
            value={formState.fullName}
            onChange={onChange}
            required
          />

          <label htmlFor="email">Email Address (Required)</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={onChange}
            required
          />

          <label htmlFor="phone">Phone Number (Optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={onChange}
          />
        </section>

        <section className="contact-section">
          <h2>Project Details</h2>
          <label htmlFor="project-title">Project Title (Optional)</label>
          <input
            type="text"
            id="project-title"
            name="projectTitle"
            value={formState.projectTitle}
            onChange={onChange}
          />

          <label htmlFor="project-description">Project Description (Required)</label>
          <textarea
            id="project-description"
            name="projectDescription"
            value={formState.projectDescription}
            onChange={onChange}
            required
          />
        </section>

        <section className="contact-section">
          <h2>Services Needed</h2>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="services"
                value="Project Management"
                checked={formState.services.includes("Project Management")}
                onChange={onChange}
              /> Project Management
            </label>
            <label>
              <input
                type="checkbox"
                name="services"
                value="Data Analysis"
                checked={formState.services.includes("Data Analysis")}
                onChange={onChange}
              /> Data Analysis
            </label>
            <label>
              <input
                type="checkbox"
                name="services"
                value="Writing/Editing"
                checked={formState.services.includes("Writing/Editing")}
                onChange={onChange}
              /> Writing/Editing
            </label>
            <label>
              <input
                type="checkbox"
                name="services"
                value="Research Assistance"
                checked={formState.services.includes("Research Assistance")}
                onChange={onChange}
              /> Research Assistance
            </label>
            <label>
              <input
                type="checkbox"
                name="services"
                value="Other"
                checked={formState.services.includes("Other")}
                onChange={onChange}
              /> Other (specify)
            </label>
            {formState.services.includes("Other") && (
              <input
                type="text"
                id="other-service"
                name="otherService"
                value={formState.otherService}
                onChange={onChange}
                placeholder="Specify other services"
              />
            )}
          </div>
        </section>

        <section className="contact-section">
          <h2>Budget and Timeline</h2>
          <label htmlFor="budget">Estimated Budget (Optional)</label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formState.budget}
            onChange={onChange}
          />

          <label htmlFor="deadline">Preferred Deadline (Required)</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formState.deadline}
            onChange={onChange}
            required
          />
        </section>

        <section className="contact-section">
          <h2>Preferred Method of Communication</h2>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="communication"
                value="Email"
                checked={formState.communication === "Email"}
                onChange={onChange}
                required
              /> Email
            </label>
            <label>
              <input
                type="radio"
                name="communication"
                value="Phone"
                checked={formState.communication === "Phone"}
                onChange={onChange}
                required
              /> Phone
            </label>
            <label>
              <input
                type="radio"
                name="communication"
                value="Video Call"
                checked={formState.communication === "Video Call"}
                onChange={onChange}
                required
              /> Video Call
            </label>
          </div>
        </section>

        <section className="contact-section">
          <h2>Additional Information</h2>
          <label htmlFor="additional-info">Additional Information (Optional)</label>
          <textarea
            id="additional-info"
            name="additionalInfo"
            value={formState.additionalInfo}
            onChange={onChange}
          />
        </section>

        <section className="contact-section">
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formState.consent}
                onChange={onChange}
                required
              /> I agree to the <a href="#">terms and conditions</a> and <a href="#">privacy policy</a>.
            </label>
          </div>
        </section>

        <button type="submit" className="submit-button">Submit</button>

        <footer className="footer-text">
          Your information will be used in accordance with our privacy policy.
        </footer>
      </form>
    </section>
  );
};

export default Contact;
