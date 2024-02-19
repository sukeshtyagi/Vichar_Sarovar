import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/ConfirmLogin.module.css";

function ConfirmLogin() {
  const navigate = useNavigate();

  const handleYesClick = () => {
    console.log("yes handel");
    navigate("/login");
  };

  const handleNoClick = () => {
    console.log("no handel");
    navigate("/home");
  };

  return (
    <div className={styles.confirmLoginContainer}>
      <p>
Apologies for the inconvenience, but our site is currently undergoing maintenance. Would you like to log in as an administrator during this period?</p>
      <div className={styles.buttonContainer}>
        <button className={styles.yesButton} onClick={handleYesClick}>
          Yes
        </button>
        <button className={styles.noButton} onClick={handleNoClick}>
          No
        </button>
      </div>
    </div>
  );
}

export default ConfirmLogin;
