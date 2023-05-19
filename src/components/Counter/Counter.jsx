import React, { useEffect, useState } from "react";
import './Counter.css'
const Counter = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("June 30, 2023 22:00:00").getTime()
  );
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds:0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = countdownDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [countdownDate]);

  return (
    <>
        <div>
            <div>
                
                <h2 id="textCounter">Faltan :</h2>
                <p id="textCounter">
                    {timeLeft.days} Dias, {timeLeft.hours} Horas, {timeLeft.minutes} Minutos, {timeLeft.seconds} segundos
                </p>
                <hr className="lineaHr"></hr>

            </div>
        </div>
    </>
  );
};

export default Counter;
