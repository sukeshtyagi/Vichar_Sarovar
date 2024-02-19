import React from "react";
import style from "../style/Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={style.headerContainer}>
      <div className={style.headerCompanyName}>
        <NavLink to="/home" className={style.navlink}>
          <h3>Vachan_Sarovar</h3>
        </NavLink>
      </div>

      <div className={style.headerItems}>
        <NavLink to="/initiatives" className={style.navlink}>
          <h5>Initiatives</h5>
        </NavLink>
        <NavLink to="/about" className={style.navlink}>
          <h5>About Us</h5>
        </NavLink>

        <NavLink to="/reach" className={style.navlink}>
          <h5>Reach us</h5>
        </NavLink>

        <NavLink to="/confirmLogin" className={style.navlink}>
          <h5>Login</h5>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
