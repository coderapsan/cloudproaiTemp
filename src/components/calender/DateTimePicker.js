import React, { useState } from 'react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import ContactForm from '../forms/ContactForm';


const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleBookAppointment = () => {
    if (selectedDate && selectedTime) {
      
      const completeDateTime = new Date(selectedDate);
      completeDateTime.setHours(selectedTime.hours());
      completeDateTime.setMinutes(selectedTime.minutes());

      
      console.log("Appointment booked for:", completeDateTime);
    } else {
      alert("Please select a valid date and time for the appointment.");
    }
  };

  return (
    <div className="datetime-picker-container">
      <div className="date-picker">
        <Datetime
          value={selectedDate}
          onChange={handleDateChange}
          inputProps={{ placeholder: 'Select date', readOnly: true }}
          className='appearance-none shadow border rounded py-3 px-2 text-gray-darker'
        />
      </div>
      <div className="time-picker">
        <Datetime
          value={selectedTime}
          onChange={handleTimeChange}
          inputProps={{ placeholder: 'Select time', readOnly: true }}
          dateFormat={false} 
          timeFormat="HH:mm" 
          className='appearance-none shadow border rounded py-3 px-2 text-gray-darker'
        />
      </div>
      <ContactForm />
      <button className="book-appointment-btn" onClick={handleBookAppointment}>
        Book Appointment
      </button>
    </div>
  );
};

export default DateTimePicker;
