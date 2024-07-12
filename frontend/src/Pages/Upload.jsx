import React, { useState, useContext, useEffect } from "react";
import styles from "./Upload.module.css";
import { getMonth } from "../Atoms/MonthDates";
import UploadNavBar from "../Organisms/UploadNavBar/UploadNavBar";
import NavBar from "../Organisms/NavBar/NavBar";
import UploadSideBar from "../Organisms/UploadSideBar/UploadSideBar";
import MonthView from "../Organisms/MonthView/MonthView";
import GlobalContext from "../GlobalContext";
import CreateEvent from "../Organisms/CreateEvent/CreateEvent";
import CreateCalendar from "../Organisms/CreateCalendar/CreateCalendar";

function Upload() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal, showCreateCalendar} = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    
    <>
      {showEventModal && <CreateEvent />}
      {showCreateCalendar && <CreateCalendar />}
      <div className={styles.container}>
        <NavBar isCalendarVisible={true} />
        <div className={styles.innerContainer}>
          <UploadSideBar />
          <MonthView month={currentMonth} />
        </div>
      </div>
    </>
  );
}

export default Upload;
