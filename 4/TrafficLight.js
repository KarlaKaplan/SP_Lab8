import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setColorIndex(prevColorIndex => (prevColorIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const colors = ['red', 'yellow', 'green'];

  return (
    <div className="traffic-light">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`light ${colorIndex === index ? 'active' : ''}`}
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

export default TrafficLight;
