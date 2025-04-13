import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const IslamicCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hijriDate, setHijriDate] = useState('');
  const [calendarDays, setCalendarDays] = useState([]);

  // Islamic events for the year 2024/1445H
  const islamicEvents = {
    '2024-03-10': 'Start of Ramadan',
    '2024-04-09': 'Eid al-Fitr',
    '2024-06-16': 'Eid al-Adha',
    '2024-07-07': 'Islamic New Year 1446',
    '2024-07-16': 'Day of Ashura',
    '2024-09-15': 'Prophet\'s Birthday'
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    // Convert Sunday from 0 to 7 to match Monday start
    return firstDay === 0 ? 6 : firstDay - 1;
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    const days = [];
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push('');
    }
    
    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    setCalendarDays(days);
  };

  const monthNames = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const getEventForDate = (day) => {
    if (!day) return null;
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return islamicEvents[dateStr];
  };

  useEffect(() => {
    // Get Hijri date
    const options = { 
      calendar: 'islamic',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    const hijriDate = new Intl.DateTimeFormat('ar-SA', options).format(new Date());
    setHijriDate(hijriDate);

    // Generate calendar days
    generateCalendarDays();
  }, [currentDate]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-8">
      <h1 className="text-5xl font-bold text-center my-12 text-[#2C646C]">Islamic Calendar</h1>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <FaCalendarAlt className="text-4xl text-[#35767F]" />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h1>
                <p className="text-sm text-gray-600">Hijri: {hijriDate}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={goToPreviousMonth}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <FaChevronLeft className="text-[#35767F]" />
              </button>
              <button 
                onClick={goToNextMonth}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <FaChevronRight className="text-[#35767F]" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Days of Week Header */}
            <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <div 
                  key={day} 
                  className="py-2 text-center text-sm font-semibold text-gray-600"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7">
              {calendarDays.map((day, index) => {
                const event = getEventForDate(day);
                return (
                  <div
                    key={index}
                    className={`
                      h-24 p-2 border-b border-r border-gray-200
                      ${index % 7 === 6 ? '' : 'border-r'} 
                      ${Math.floor(index / 7) === Math.floor(calendarDays.length / 7) ? '' : 'border-b'}
                      hover:bg-gray-50 transition-colors
                      relative
                    `}
                  >
                    <span className={`
                      text-sm font-medium 
                      ${event ? 'text-[#35767F] font-bold' : 'text-gray-700'}
                    `}>
                      {day}
                    </span>
                    {event && (
                      <div className="mt-1">
                        <span className="text-xs bg-[#35767F]/10 text-[#35767F] px-2 py-1 rounded-full">
                          {event}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Islamic Events Legend */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-[#35767F] mb-2">Islamic Events</h3>
            <div className="border border-gray-200 rounded-lg p-4 space-y-2">
              {Object.entries(islamicEvents).map(([date, event]) => (
                <div key={date} className="flex items-center gap-2">
                  <span className="w-24 text-sm text-gray-600">{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  <span className="text-sm font-medium text-[#35767F]">{event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IslamicCalendar; 