import React, { useState, useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const IslamicCalendar = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [hijriYear, setHijriYear] = useState('');

  // Islamic events for 2025/1446-1447H
  const islamicEvents = {
    '2025-01-27': { name: 'Lailat al Miraj', color: 'text-[#35767F]' },
    '2025-02-14': { name: 'Lailat al Bara\'ah', color: 'text-[#35767F]' },
    '2025-03-01': { name: 'Ramadan Begins', color: 'text-[#35767F]' },
    '2025-03-27': { name: 'Laylat al-Qadr', color: 'text-[#35767F]' },
    '2025-03-31': { name: 'Eid al-Fitr', color: 'text-[#35767F]' },
    '2025-06-06': { name: 'Waqf al Arafa', color: 'text-[#35767F]' },
    '2025-06-07': { name: 'Eid Al-Adha', color: 'text-[#35767F]' },
    '2025-07-05': { name: 'Muharram (Islamic New Year)', color: 'text-[#35767F]' },
    '2025-07-14': { name: 'Day of Ashura', color: 'text-[#35767F]' },
    '2025-09-05': { name: 'Milad un Nabi', color: 'text-[#35767F]' },
    '2025-02-28': { name: 'Last day of Sha\'ban', color: 'text-[#35767F]' }
  };

  const monthNames = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL',
    'MAY', 'JUNE', 'JULY', 'AUGUST',
    'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1;
  };

  const generateMonthDays = (year, month) => {
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
    
    return days;
  };

  const getEventForDate = (year, month, day) => {
    if (!day) return null;
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return islamicEvents[dateStr];
  };

  useEffect(() => {
    // Get Hijri year
    const options = { 
      calendar: 'islamic',
      year: 'numeric'
    };
    const hijriYear = new Intl.DateTimeFormat('ar-SA', options).format(new Date());
    setHijriYear(hijriYear);
  }, [currentYear]);

  const renderMonth = (month) => {
    const days = generateMonthDays(currentYear, month);
  
    return (
      <div
        key={month}
        className="bg-white rounded-lg shadow-sm p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <h3 className="text-lg font-semibold text-[#2C646C] mb-3">
          {monthNames[month]}
        </h3>
        <div className="grid grid-cols-7 gap-1">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
            <div key={i} className="text-xs text-gray-500 text-center py-1">
              {day}
            </div>
          ))}
          {days.map((day, index) => {
            const event = getEventForDate(currentYear, month, day);
            return (
              <div
                key={index}
                className={`relative text-center py-1 text-sm
                  ${event ? 'font-semibold' : ''}
                  ${event ? event.color : 'text-gray-700'}`}
              >
                {day}
                {event && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <div className="w-1 h-1 bg-[#35767F] rounded-full"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  

  return (
    <div className="min-h-screen bg-gray-50 pt-16 px-4 pb-8">
      <div className="max-w-7xl mx-auto mt-18">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="flex flex-col items-center gap-4">
            <FaCalendarAlt className="text-5xl text-[#35767F]" />
            <div className="text-center">
              <h1 className="text-4xl font-bold text-[#2C646C] mb-2">
              Islamic Calendar {currentYear}
              </h1>
              <p className="text-gray-600">Hijri Year: {hijriYear}H</p>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }, (_, i) => renderMonth(i))}
        </div>

        {/* Islamic Events Legend */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-2xl font-semibold text-[#2C646C] mb-8">ISLAMIC HOLIDAYS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(islamicEvents).map(([date, event]) => (
              <div key={date} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#35767F] rounded-full"></div>
                <span className="text-md text-gray-700">
                  {new Date(date).toLocaleDateString('en-US', { 
                    month: 'long',
                    day: 'numeric'
                  })} - {event.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IslamicCalendar; 