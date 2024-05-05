import React, { useState, useEffect } from 'react';

const InfiniteTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handlePlayPauseClick = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const handleResetClick = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h2>Бесконечный таймер</h2>
      <p>Seconds: {seconds}</p>
      <button onClick={handlePlayPauseClick}>{isRunning ? '⏸ Pause' : '▶ Play'}</button>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default InfiniteTimer;
