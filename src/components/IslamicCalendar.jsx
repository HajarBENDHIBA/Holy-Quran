import React, { useState, useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import moment from 'moment-hijri';

const IslamicCalendar = () => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [hijriYear, setHijriYear] = useState('');

  const islamicEvents = {
    '2025-03-01': { name: 'Ramadan Begins', color: 'text-[#35767F]' },
    '2025-03-27': { name: 'Laylat al-Qadr', color: 'text-[#35767F]' },
    '2025-03-31': { name: 'Eid al-Fitr', color: 'text-[#35767F]' },
    '2025-06-06': { name: 'Waqf al Arafa', color: 'text-[#35767F]' },
    '2025-06-07': { name: 'Eid Al-Adha', color: 'text-[#35767F]' },
    '2025-07-05': { name: 'Muharram (Islamic New Year)', color: 'text-[#35767F]' },
    '2025-07-14': { name: 'Day of Ashura', color: 'text-[#35767F]' },
    '2025-09-05': { name: 'Milad un Nabi', color: 'text-[#35767F]' },
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

  // Convert Gregorian date to Hijri using moment-hijri
  const getHijriDate = (year, month, day) => {
    const date = moment(`${year}-${month + 1}-${day}`, "YYYY-MM-DD");
    return date.format('iD iMMM'); // 'iD' gives day, 'iMMM' gives month in Hijri
  };

  const getEventForDate = (year, month, day) => {
    if (!day) return null;
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return islamicEvents[dateStr];
  };

  const renderMonthDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  useEffect(() => {
    const hijriYear = moment(`${currentYear}-${currentMonth + 1}-01`, "YYYY-MM-DD").format('iYYYY');
    setHijriYear(hijriYear);
  }, [currentYear, currentMonth]);

  return (
    <div className="min-h-screen bg-gray-50 pt-16 px-4-8 mt-22">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-8">
          <FaCalendarAlt className="text-5xl text-[#35767F]" />
          <h1 className="text-3xl font-bold text-[#2C646C] mt-2">Islamic Calendar {hijriYear}H / {currentYear}</h1>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handlePrevMonth}
            className="bg-[#2C646C] text-white px-4 py-1 rounded hover:bg-[#244f55]"
          >
            ← Prev
          </button>
          <h2 className="text-xl font-semibold text-[#2C646C]">{monthNames[currentMonth]}</h2>
          <button
            onClick={handleNextMonth}
            className="bg-[#2C646C] text-white px-4 py-1 rounded hover:bg-[#244f55]"
          >
            Next →
          </button>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <div key={i} className="text-sm text-gray-500">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {renderMonthDays().map((day, index) => {
              const event = getEventForDate(currentYear, currentMonth, day);
              return (
                <div
                  key={index}
                  className={`relative py-2 text-center rounded text-sm transition-all
                    ${event ? event.color : 'text-gray-700'}
                    ${event ? 'font-semibold bg-[#f0fdfc]' : ''}`}
                >
                  {day && (
                    <>
                      <div>{day}</div>
                      {/* Hijri Date */}
                      <div className="text-xs text-gray-400">
                        {getHijriDate(currentYear, currentMonth, day)} {/* Hijri date */}
                      </div>
                      {event && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                          <div className="w-1 h-1 bg-[#35767F] rounded-full"></div>
                          <div className="absolute bg-white text-gray-700 text-xs px-2 py-1 border rounded shadow mt-1 whitespace-nowrap z-10 hidden group-hover:block">
                            {event.name}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Event Legend */}
        <div className="mt-10 bg-white rounded-lg shadow-sm p-4">
          <h3 className="text-2xl font-semibold text-[#2C646C] mb-4">ISLAMIC HOLIDAYS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
