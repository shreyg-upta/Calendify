import React from "react";
import Day from "../../Cells/Day/Day";
import styles from "./MonthView.module.css";

export default function MonthView({ month }) {
  return (
    <div className={styles.monthGrid}>
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
