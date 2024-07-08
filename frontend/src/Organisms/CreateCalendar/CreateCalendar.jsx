import React, { useState, useReducer, useEffect} from 'react';
import styles from './CreateCalendar.module.css';
import { FaTimes, FaClock, FaCalendar } from 'react-icons/fa'; // Import clock icons from react-icons library

function CreateCalendar() {
    const [show, setShow] = useState(true);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');
    const [savedEvents, dispatchCalEvent] = useReducer(
        savedEventsReducer,
        [],
        initEvents
      );
    function savedEventsReducer(state, { type, payload }) {
        switch (type) {
          case "push":
            return [...state, payload];
          case "update":
            return state.map((evt) =>
              evt.id === payload.id ? payload : evt
            );
          case "delete":
            return state.filter((evt) => evt.id !== payload.id);
          default:
            throw new Error();
        }
      }
      function initEvents() {
        const storageEvents = localStorage.getItem("savedEvents");
        const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
        return parsedEvents;
      }
      useEffect(() => {
        localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
      }, [savedEvents]);

      function handleSubmit(e) {
        e.preventDefault();
        const calendarEvent = {
          title,
          description,
          date,
          startTime,
          endTime
        };
        // if (selectedEvent) {
        //   dispatchCalEvent({ type: "update", payload: calendarEvent });
        // } else {
          dispatchCalEvent({ type: "push", payload: calendarEvent });
        // }
    
        // setShowEventModal(false);
      }

    return (
        show && (
            <div className={styles.main}>
                <div className={styles.close} onClick={() => setShow(false)}>
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
                    <label>
                        <input
                            type="radio"
                            name="tag"
                            value="work"
                            checked={tag === 'work'}
                            onChange={() => setTag('work')}
                        />
                        Red
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="tag"
                            value="personal"
                            checked={tag === 'personal'}
                            onChange={() => setTag('personal')}
                        />
                        Green
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="tag"
                            value="others"
                            checked={tag === 'others'}
                            onChange={() => setTag('others')}
                        />
                        Yellow
                    </label>
                </div>
                <button className={styles.buttonn} onClick={handleSubmit}>
                    Save
                </button>
            </div>
        )
    );
}

export default CreateCalendar;
