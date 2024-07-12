import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../../GlobalContext";
import styles from "./Day.module.css";

export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? styles.currentDay
      : "";
  }
  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {rowIdx === 0 && (
          <p className={styles.headerText}>
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p className={`${styles.dayNumber} ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className={styles.eventsContainer}
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={styles.event}
            style={{ backgroundColor: `#${evt.label}200` }}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
}
``
