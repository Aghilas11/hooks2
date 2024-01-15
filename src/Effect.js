import React, { useEffect, useState } from "react";

const Effect = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [format, setFormat] = useState("full"); // Format par défaut

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleFormatChange = (newFormat) => {
    setFormat(newFormat);
  };

  function formatTime(time, format) {
    switch (format) {
      case "full":
        return time.toLocaleString();
      case "hours-minutes":
        return `${time.getHours()}:${String(time.getMinutes()).padStart(
          2,
          "0"
        )}`;
      case "time":
        return `${time.getHours()}:${String(time.getMinutes()).padStart(
          2,
          "0"
        )}:${String(time.getSeconds()).padStart(2, "0")}`;
      default:
        return time.toLocaleString();
    }
  }
  return (
    <div>
      <h1>useEffect</h1>
      <div>
        <label>Choisir le format :</label>
        <select
          value={format}
          onChange={(e) => handleFormatChange(e.target.value)}
        >
          <option value="full">Format complet</option>
          <option value="hours-minutes">Heures et minutes</option>
          <option value="time">Heure uniquement</option>
        </select>
      </div>
      <p>Date et heure actuelles : {formatTime(currentTime, format)}</p>
    </div>
  );
};

export default Effect;
