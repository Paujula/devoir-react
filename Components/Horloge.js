import React, { useState, useEffect } from'react';

function Horloge() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p>Date et heure : {date.toLocaleTimeString()}</p>
  );
}

export default Horloge;