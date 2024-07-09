import styles from "./NavBar.module.css";
import React, { useState } from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider, useGoogleOAuth } from "@react-oauth/google";
import search from "../../assets/search.svg";
import cross from "../../assets/cross.svg";
import { hrefTo } from "@storybook/addon-links";
function Header() {
  const [isLogin, setIsLogin] = useState(false);
const [searchText, setSearchText] = useState('');
// const {user, isAuthenticated, isLoading} = useGoogleOAuth();

  return (
    <GoogleOAuthProvider clientId="95760422165-fp5f91hneg4aj9v2blj71cqjoimpqkao.apps.googleusercontent.com">
      <div className={styles.main}>
        <span onClick={()=> window.location.href = `${window.location.origin}`}>Calendify.com</span>
        <div className={styles.search}>
            <div className={styles.searchIcon}>
            <img src={search} className={styles.searchIcon1}/>
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Search Calendars"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText===''? null: <img src={cross} className={styles.searchIcon2} onClick={()=>setSearchText('')}/>}

            </div>
          {sessionStorage.getItem("credentials") ? (
            <div className={styles.loggedIn}>
              <button className={styles.createButton} onClick={()=> window.location.href = `${window.location.origin}/upload`}>Create Calendar</button>
              <img
                src="https://www.mediacollege.com/internet/html/images/image-tag1.gif"
                className={styles.pfp}
              />
            </div>
          ) : (
            <div className={styles.googleButton}>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  //POST request to backend
                  console.log(credentialResponse);
                  sessionStorage.setItem("credentials", credentialResponse);
                  setIsLogin(true);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
                text="Sign In"
              />
            </div>
          )}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Header;
