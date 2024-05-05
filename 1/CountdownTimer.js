import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div>
      <h2>Обратный отсчёт</h2>
      <p>Seconds: {seconds}</p>
    </div>
  );
};

export default CountdownTimer;
