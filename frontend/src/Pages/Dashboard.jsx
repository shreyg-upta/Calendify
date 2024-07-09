import { useState } from "react";
import Card from "../Atoms/Card/Card";
import NavBar from "../Organisms/NavBar/NavBar";
import styles from "./Dashboard.module.css";

function App() {
  const name = "Guest";
  return (
    <>
      <NavBar />
      <div className={styles.main}>
      <div className={styles.typebox}>
          <h1>{name}, you might like</h1>
          <div className={styles.cardsContainer}>
            <Card
              imgURL={"test-img.png"}
              title={"Lorem Ipsum"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
              calendarID={"LoremIpsum"}
            />
            <Card
              imgURL={"test-img.png"}
              title={"Lorem Ipsum"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
              calendarID={"LoremIpsum"}
            />
            <Card
              imgURL={"test-img.png"}
              title={"Lorem Ipsum"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
              calendarID={"LoremIpsum"}
            />
            <Card
              imgURL={"test-img.png"}
              title={"Lorem Ipsum"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
              calendarID={"LoremIpsum"}
            />
          </div>
        </div>
        <div className={styles.typebox}>
          <h1>Trending Calendars</h1>
          <div className={styles.cardsContainer}>
            <Card
              imgURL={"test-img.png"}
              title={"Lorem Ipsum"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
              calendarID={"LoremIpsum"}
            />
            <Card
              imgURL={"test-img.png"}
              title={"Lorem Ipsum"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
              calendarID={"LoremIpsum"}
            />
            <Card
              imgURL={"test-img.png"}
              title={"Lorem Ipsum"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
              calendarID={"LoremIpsum"}
            />
            <Card
              imgURL={"test-img.png"}
              title={"Lorem Ipsum"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
              calendarID={"LoremIpsum"}
            />
          </div>
        </div>
        <div className={styles.typebox}>
          <h1>Sports</h1>
          <div className={styles.cardsContainer}>
            <Card
              imgURL={"test-img.png"}
              title={"Lorem Ipsum"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
              calendarID={"LoremIpsum"}
            />
            <Card
              imgURL={"test-img.png"}
              title={"Lorem Ipsum"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
              calendarID={"LoremIpsum"}
            />
            <Card
              imgURL={"test-img.png"}
              title={"Lorem Ipsum"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
              calendarID={"LoremIpsum"}
            />
            <Card
              imgURL={"test-img.png"}
              title={"Lorem Ipsum"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
              calendarID={"LoremIpsum"}
            />
          </div>
        </div>
        <div className={styles.typebox}>
          <h1>Google Events</h1>
          <div className={styles.cardsContainer}>
            <Card
              imgURL={"test-img.png"}
              title={"Lorem Ipsum"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
              calendarID={"LoremIpsum"}
            />
            <Card
              imgURL={"test-img.png"}
              title={"Lorem Ipsum"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
              calendarID={"LoremIpsum"}
            />
            <Card
              imgURL={"test-img.png"}
              title={"Lorem Ipsum"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
              calendarID={"LoremIpsum"}
            />
            <Card
              imgURL={"test-img.png"}
              title={"Lorem Ipsum"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
              calendarID={"LoremIpsum"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
