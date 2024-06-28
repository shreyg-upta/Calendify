import React, { useState } from 'react';
import styles from './CreatePopup.module.css';
import { FaTimes, FaClock, FaCalendar } from 'react-icons/fa'; // Import clock icons from react-icons library

function CreatePopup() {
    const [show, setShow] = useState(true);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');

    const handleSave = () => {
        const eventData = {
            title,
            date,
            startTime,
            endTime,
            description,
            tag
        };

        fetch('PiKG URL DAAL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Data successfully uploaded to server:', eventData);
            // Optionally handle success here (e.g., show success message)
        })
        .catch(error => {
            console.error('Error uploading data:', error);
            // Optionally handle error here (e.g., show error message)
        });

        // Close the popup after saving
        setShow(false);
    };

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
                <button className={styles.buttonn} onClick={handleSave}>
                    Save
                </button>
            </div>
        )
    );
}

export default CreatePopup;
