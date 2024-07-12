import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import GlobalContext from "../../GlobalContext";
import { getMonth } from "../../Atoms/MonthDates";
import styles from "./SmallCalendar.module.css";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";

export default function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const {
    monthIndex,
    setSmallCalendarMonth,
    setDaySelected,
    daySelected,
  } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }

  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }

  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    
    if (nowDay === currDay) {
      return `${styles["day-button"]} ${styles["current-day"]}`;
    } else if (currDay === slcDay) {
      return `${styles["day-button"]} ${styles["selected-day"]}`;
    } else {
      return styles["day-button"];
    }
  }

  return (
    <div className={styles["small-calendar"]}>
      <header className={styles["calendar-header"]}>
        <p>
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
            "MMMM YYYY"
          )}
        </p>
        <div className={styles["calendar-nav-buttons"]}>
          <button onClick={handlePrevMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              <img src={left} alt="left" className={styles.imgg}/>
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              <img src={right} alt="right" className={styles.imgg}/>
            </span>
          </button>
        </div>
      </header>
      <div className={styles["days-grid"]}>
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                  setDaySelected(day);
                }}
                className={getDayClass(day)}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
