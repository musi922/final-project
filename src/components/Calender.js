import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css';


const Calender = () => {
    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date);
    };

    return (
        <div className='calendar-container'>
            <Calendar
                onChange={onChange}
                value={date}
                className='calendar'
            />
        </div>
    );
};

export default Calender;
