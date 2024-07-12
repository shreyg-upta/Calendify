import React from "react";
import CreateEventButton from "../../Cells/CreateEventButton/CreateEventButton";
import SmallCalendar from "../../Organisms/SmallCalendar/SmallCalendar";
import Labels from "../../Atoms/Labels/Labels";
import styles from "./UploadSideBar.module.css";

export default function UploadSideBar() {
  return (
    <aside className={styles.sidebar}>
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}
