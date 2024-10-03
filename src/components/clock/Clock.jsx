import { useState, useEffect } from "react";
import styles from "./Clock.module.css";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const options = {
      timeZone: "America/Chicago",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const timeString = formatTime(currentTime);

  return (
    <div className={styles.timeBox}>
      <div className={styles.time}>{timeString}</div>
      <div className={styles.zone}>
        central<br></br> standard time
      </div>
    </div>
  );
}
