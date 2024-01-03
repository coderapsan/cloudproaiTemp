import React, { useState } from 'react';

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone_number: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/submit-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            console.log('Form submitted successfully!');
            // Handle any further actions upon successful form submission
          } else {
            console.error('Form submission failed!');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
  
  return (
    <form onSubmit={handleSubmit} className="contactForm">
      
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full name"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          placeholder="Message"
          required
        />
      </div>
      <div className="form-group text-center mb-0">
        <button type="submit" className="theme-btn style-two">
          Send Message <i className="far fa-long-arrow-right" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;