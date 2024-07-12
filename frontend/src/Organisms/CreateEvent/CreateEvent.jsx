import React, { useContext, useState } from "react";
import GlobalContext from "../../GlobalContext";
import styles from "./CreateEvent.module.css";
import { FaTimes, FaClock, FaCalendar } from "react-icons/fa";

const labelsClasses = [
  "red",
  "green",
  "yellow",
];

export default function CreateEvent() {
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : ""
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [date, setDate] = useState(
    selectedEvent ? selectedEvent.date : daySelected.format("YYYY-MM-DD")
  );
  const [startTime, setStartTime] = useState(
    selectedEvent ? selectedEvent.startTime : ""
  );
  const [endTime, setEndTime] = useState(
    selectedEvent ? selectedEvent.endTime : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      date,
      startTime,
      endTime,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }

  return (
    <div className={styles.main}>
      <div className={styles.close} onClick={() => setShowEventModal(false)}>
        <FaTimes /> {/* Close icon */}
      </div>
      <input
        type="text"
        placeholder="Add title"
        className={styles.textInput1}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.dateTimeContainer}>
        <div className={styles.dateTimeInput}>
          <FaCalendar className={styles.calendarIcon} /> {/* Date icon */}
          <input
            type="date"
            className={styles.dnt}
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className={styles.dateTimeInput}>
          <FaClock className={styles.clockIcon} /> {/* Start time icon */}
          <input
            type="time"
            className={styles.dnt}
            placeholder="Start time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className={styles.dateTimeInput}>
          <FaClock className={styles.clockIcon} /> {/* End time icon */}
          <input
            type="time"
            className={styles.dnt}
            placeholder="End time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
      </div>
      <input
        type="text"
        placeholder="Add description"
        className={styles.textInput2}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className={styles.tag}>
        <span>Tags:</span>{' '}
        {labelsClasses.map((lblClass, i) => (
          <label key={i}>
            <input
              type="radio"
              name="tag"
              value={lblClass}
              checked={selectedLabel === lblClass}
              onChange={() => setSelectedLabel(lblClass)}
            />
            {lblClass.charAt(0).toUpperCase() + lblClass.slice(1)}
          </label>
        ))}
      </div>
      <button className={styles.buttonn} onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
}
