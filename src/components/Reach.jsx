import React from "react";
import style from "../style/Reach.module.css";
import { NavLink } from "react-router-dom";

function Reach() {
  return (
    <div className={style.reachContainer}>
      <p className={style.navlinkContainer}>
        <NavLink to="/home" className={style.navlink}>
          Home
        </NavLink>
        <span>{">>> "} Contact</span>
      </p>
      <div className={style.reachHeaderSection}>
        <h4>CONTACT US</h4>
        <p>
          We are committed to provide you with the best possible support.Here's
          how you cant get in touch with us :
        </p>
      </div>
      <div className={style.reachMainSection}>
        <h4>Customer Support</h4>
        <p>
          WhatsApp us: <br />
          <NavLink to="/home" className={style.navlinkSpan}>
            0123456789
          </NavLink>
        </p>
        <p>
          Email at:
          <br />
          <NavLink to="/home" className={style.navlinkSpan}>
            CS@vicharsarovar.com
          </NavLink>
        </p>
        <p>
          Call on:
          <br />
          <NavLink to="/home" className={style.navlinkSpan}>
            0123456789
          </NavLink>
        </p>
        <p>8:00 AM to 8:00 PM,365 days</p>
      </div>
      <div className={style.reachFooterSection}>
        <p>
          We value your time and we are committed to ensure satisfaction in all
          your interactions with us.
        </p>
      </div>
    </div>
  );
}

export default Reach;
