import { useState } from "react";
import Card from "../Atoms/Card/Card";
import NavBar from "../Organisms/NavBar/NavBar";
import styles from "./Dashboard.module.css";

function App() {
  const name = "Guest";
  return (
    <>
      <NavBar isCalendarVisible={false} />
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
        <div className={styles.typoobox}>
      <h1>Hi there!</h1>
      <p>We are still in our alpha launch phase and are constantly working on the project.<br/> Please give recommendations, feedback, and queries via the form below. Your feedback is highly appreciated.</p>
      <form className={styles.form}>
        <input type="text" placeholder="Name" className={styles.input}/>
        <input type="email" placeholder="Email" className={styles.input}/>
        <textarea placeholder="Feedback" className={styles.textarea}/>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
      <h2 className={styles.madeBy}>Made by 2 BITSians, Inspired by Google</h2>
      <p>Follow <a href='/about'>this link</a> to get to know more <a href='/about'>about us</a></p>
      <p>This website's design draws massive inspiration from various Google services, namely Google Calendar, YouTube, Play Store, and Chrome Web Store.</p>
      <p>© 2024 BITS Goa</p>
    </div>
        </div>
    </>
  );
}

export default App;
