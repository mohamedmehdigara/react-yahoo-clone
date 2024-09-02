import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledCalendar = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

const StyledCalendarHeader = styled.div`
  text-align: center;
  font-weight: bold;
`;

const StyledCalendarWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 10px;
`;

const StyledCalendarDay = styled.div`
  text-align: center;
  padding: 5px;
`;

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  return (
    <StyledCalendar>
      <StyledCalendarHeader>{currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</StyledCalendarHeader>
      <StyledCalendarWeek>
        {daysOfWeek.map((day) => (
          <StyledCalendarDay key={day}>{day}</StyledCalendarDay>
        ))}
      </StyledCalendarWeek>
      {Array.from({ length: daysInMonth }, (_, index) => index + 1).map((day) => (
        <StyledCalendarDay key={day}>{day}</StyledCalendarDay>
      ))}
    </StyledCalendar>
  );
};

export default Calendar;