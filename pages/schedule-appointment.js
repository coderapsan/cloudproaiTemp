import React, { useState } from 'react';
import Layout from '@/src/layout/Layout';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { Col, Container } from 'react-bootstrap';
import DateTimePicker from '@/src/components/calender/DateTimePicker';
import emailjs from 'emailjs-com';

const ScheduleAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    email: '',
    subject: '',
    message: '',
    selectedDate: '',
    selectedTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      selectedDate: date.format('YYYY-MM-DD'), 
    });
  };
  const handleTimeChange = (time) => {
    setFormData({
      ...formData,     
      selectedTime: time.format('hh:mm A'), 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData)

    try {
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID
      );
  
      if (res.status === 200) {
        alert("Sent Successfully, We will get back to you soon.");
  
        // Reset the form fields
        setFormData({
          name: '',
          phone_number: '',
          email: '',
          subject: '',
          message: '',
          selectedDate: '',
          selectedTime: ''
        });
      }
    } catch (error) {
      console.log("EmailJS error:", error);
      alert("Can't send, please check and try again.");
    }
  };


  return (
    <Layout>
      <Container fluid>
        <form onSubmit={handleSubmit} className='row p-50 pb-150'>
        <h6 className='fs-4 pb-20'>Schedule an Appointment</h6>
          <Col md={6} className="form-group">
            <label>Select Date:</label>
            <Datetime
              value={formData.selectedDate}
              onChange={handleDateChange}
              inputProps={{ placeholder: 'Select Date', readOnly: true }}
              dateFormat="YYYY-MM-DD"
              timeFormat={false}
              closeOnSelect={true}
            />
          </Col>

          <Col md={6} className="form-group">
            <label>Select Time:</label>
            <Datetime
              value={formData.selectedTime}
              onChange={handleTimeChange}
              inputProps={{ placeholder: 'Select Time', readOnly: true }}
              dateFormat={false}
              timeFormat="HH:mm A"
              step={15}
            />
          </Col>
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
      </Container>
    </Layout>
  );
};

export default ScheduleAppointment;
