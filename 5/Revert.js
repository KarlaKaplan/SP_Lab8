import React, { useState, useEffect } from 'react';

const Revert = ({ s }) => {
  const [revertedString, setRevertedString] = useState(s);

  useEffect(() => {
    const timer = setInterval(() => {
      setRevertedString(prevString => {
        return prevString.charAt(prevString.length - 1) + prevString.slice(0, -1);
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [s]);

  return (
    <div>
      {revertedString}
    </div>
  );
};

export default Revert;
