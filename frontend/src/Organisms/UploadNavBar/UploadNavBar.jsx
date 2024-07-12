import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import GlobalContext from "../../GlobalContext";
import styles from "./UploadNavBar.module.css";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";

export default function UploadNavBar() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.title}onClick={() => (window.location.href = `${window.location.origin}`)}>Calendify.com</h1>
      <button onClick={handleReset} className={styles.button}>
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className={`material-icons-outlined ${styles.iconButton}`}>
          <img src={left} alt="left" className={styles.imgg}/>
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className={`material-icons-outlined ${styles.iconButton}`}>
          <img src={right} alt="right" className={styles.imgg}/>
        </span>
      </button>
      <h2 className={styles.month}>
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}
