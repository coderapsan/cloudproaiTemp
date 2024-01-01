import React, { useState } from 'react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import ContactForm from '../forms/ContactForm';
// import './DateTimePicker.css'; // Import your custom CSS for styling

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBookAppointment = () => {
    if (selectedDate) {
      // Add your logic to handle booking the appointment
      console.log("Appointment booked for:", selectedDate);
      // You can send the selectedDate to your backend or perform further actions here
    } else {
      alert("Please select a valid date and time for the appointment.");
    }
  };

  return (
    <div className="datetime-picker-container">
      <Datetime
        value={selectedDate}
        onChange={handleDateChange}
        inputProps={{ placeholder: 'Select date and time', readOnly: true }}
        className='appearance-none shadow border rounded py-3 px-2 text-gray-darker'
      />
      <ContactForm/>
      <button className="book-appointment-btn" onClick={handleBookAppointment}>
        Book Appointment
      </button>
    </div>
  );
};

export default DateTimePicker;
