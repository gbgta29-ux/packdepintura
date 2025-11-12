"use client";

import { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 30,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        }
        if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        }
        if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="flex justify-center items-center space-x-2 md:space-x-4 my-6">
      <div className="text-center bg-primary text-primary-foreground rounded-lg p-2 md:p-4">
        <div className="text-2xl md:text-4xl font-bold">{formatTime(timeLeft.hours)}</div>
        <div className="text-xs md:text-sm uppercase">Horas</div>
      </div>
      <div className="text-center bg-primary text-primary-foreground rounded-lg p-2 md:p-4">
        <div className="text-2xl md:text-4xl font-bold">{formatTime(timeLeft.minutes)}</div>
        <div className="text-xs md:text-sm uppercase">Minutos</div>
      </div>
      <div className="text-center bg-primary text-primary-foreground rounded-lg p-2 md:p-4">
        <div className="text-2xl md:text-4xl font-bold">{formatTime(timeLeft.seconds)}</div>
        <div className="text-xs md:text-sm uppercase">Segundos</div>
      </div>
    </div>
  );
};

export default Countdown;
