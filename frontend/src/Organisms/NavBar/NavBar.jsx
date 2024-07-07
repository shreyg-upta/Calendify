import styles from "./NavBar.module.css";
import React, {useState} from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

function Header() {
    const [isLogin, setIsLogin] = useState(false);
  return (
    <GoogleOAuthProvider clientId="95760422165-fp5f91hneg4aj9v2blj71cqjoimpqkao.apps.googleusercontent.com">
      <div className={styles.main}>
        <span>Calendify.com</span>
        <div className={styles.search}>
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Search Calendars"
          />
          {isLogin ? <div className={styles.loggedIn}>
            <button className={styles.createButton}>Create Calendar</button>
            <img src="https://www.mediacollege.com/internet/html/images/image-tag1.gif" className={styles.pfp} />
            </div> :
          <div className={styles.googleButton}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                //POST request to backend

                setIsLogin(true);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              text="Sign In"
            />
          
          </div>
          }
        </div>

      </div>
    </GoogleOAuthProvider>
  );
}

export default Header;
