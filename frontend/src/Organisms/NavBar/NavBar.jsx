import React, { useState, useContext, useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import styles from "./NavBar.module.css";
import search from "../../assets/search.svg";
import cross from "../../assets/cross.svg";
import dayjs from "dayjs";
import logo from "../../assets/logo.png";
import GlobalContext from "../../GlobalContext";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";

const clientId =
  "95760422165-fp5f91hneg4aj9v2blj71cqjoimpqkao.apps.googleusercontent.com";
const redirectUri = "http://localhost:3000"; // Update this to your redirect URI

function Header({ isCalendarVisible }) {
  const [searchText, setSearchText] = useState("");
  const { monthIndex, setMonthIndex, isLogin, setIsLogin } = useContext(GlobalContext);

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

  const handleLogin = () => {
    setIsLogin(true);
    console.log(isLogin);
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.email&access_type=offline`;
    window.location.href = googleAuthUrl;
  };

  // Function to handle the callback and log the authorization code
  const handleCallback = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get("code");
    setIsLogin(true);
    console.log(isLogin);
    if (code) {
      console.log("Authorization code:", code); // Log the authorization code to the console
    }
  };

  // Call the function to handle the callback on component mount
  useEffect(() => {
    handleCallback();
  }, []);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className={styles.main}>
        <span
          className={styles.sppan}
          onClick={() => (window.location.href = `${window.location.origin}`)}
        >
          Calendify.com
        </span>
        <div className={styles.search}>
          {isCalendarVisible ? (
            <header className={styles.header}>
              <button onClick={handleReset} className={styles.button}>
                Today
              </button>
              <button onClick={handlePrevMonth} className={styles.lrbutton}>
                <span
                  className={`material-icons-outlined ${styles.iconButton}`}
                >
                  <img src={left} alt="left" className={styles.imgg} />
                </span>
              </button>
              <button onClick={handleNextMonth} className={styles.lrbutton}>
                <span
                  className={`material-icons-outlined ${styles.iconButton}`}
                >
                  <img src={right} alt="right" className={styles.imgg} />
                </span>
              </button>
              <h2 className={styles.month}>
                {dayjs(new Date(dayjs().year(), monthIndex)).format(
                  "MMMM YYYY"
                )}
              </h2>
            </header>
          ) : (
            <div className={styles.searchIcon}>
              <img src={search} className={styles.searchIcon1} />
              <input
                className={styles.inputBox}
                type="text"
                placeholder="Search Calendars"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              {searchText === "" ? null : (
                <img
                  src={cross}
                  className={styles.searchIcon2}
                  onClick={() => setSearchText("")}
                />
              )}
            </div>
          )}

          {isLogin ? (
            <div className={styles.loggedIn}>
              {!isCalendarVisible ? (
                <button
                  className={styles.createButton}
                  onClick={() =>
                    (window.location.href = `${window.location.origin}/upload`)
                  }
                >
                  Create Calendar
                </button>
              ) : null}
              <img
                src="https://www.mediacollege.com/internet/html/images/image-tag1.gif"
                className={styles.pfp}
              />
            </div>
          ) : (
            <button className={styles.googleButton} onClick={handleLogin}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

Header.defaultProps = {
  isCalendarVisible: false,
};

export default Header;
