import React from "react";
import style from "../style/Header.module.css";

function Header() {
  return (
    <div className={style.headerContainer}>
      <div className={style.headerCompanyName}>
        <h3>Novel_Stash</h3>
      </div>

      <div className={style.headerItems}>
        <h5>Initiatives</h5>
        <h5>About Us</h5>
        <h5>Reach us</h5>
        <h5>Login</h5>
      </div>
    </div>
  );
}

export default Header;
