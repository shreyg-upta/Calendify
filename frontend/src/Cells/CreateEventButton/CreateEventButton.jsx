import React, { useContext } from "react";
import plusImg from "../../assets/plus.svg";
import GlobalContext from "../../GlobalContext";
import styles from "./CreateEventButton.module.css";

export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
const handleClick =() => 
    {setShowEventModal(true);
         console.log('the button was clicked')
        }
  return (
    <button onClick={handleClick} className={styles.button}>
      <img src={plusImg} alt="create_event" className={styles.icon} />
      <span className={styles.label}>Create</span>
    </button>
  );
}
