import React, { useState } from "react";
import style from "../style/Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  const user = localStorage.getItem("userName");
  const [smallScreen, setSmallScreen] = useState(false);
  return (
    <div className={style.headerContainer}>
      <div className={style.headerCompanyName}>
        <NavLink
          to="/home"
          className={style.navlink}
          onClick={() => {
            setSmallScreen(false);
          }}
        >
          <h3>Vachan_Sarovar</h3>
        </NavLink>
      </div>

      <div className={style.iconDiv}>
        {!smallScreen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={style.headerButton}
            onClick={() => {
              setSmallScreen(true);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}

        {smallScreen && (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={style.headerButton2}
              onClick={() => {
                setSmallScreen(false);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <div
              className={style.itemsDiv}
              onClick={() => {
                setSmallScreen(false);
              }}
            >
              {user && (
                <>
                  <NavLink to="/products" className={style.navlink}>
                    <h5 className={style.navlinkHeading}>Products</h5>
                  </NavLink>

                  <NavLink to="/add" className={style.navlink}>
                    <h5 className={style.navlinkHeading}>Add Product</h5>
                  </NavLink>
                </>
              )}

              <NavLink to="/initiatives" className={style.navlink}>
                <h5 className={style.navlinkHeading}>Initiatives</h5>
              </NavLink>
              <NavLink to="/about" className={style.navlink}>
                <h5 className={style.navlinkHeading}>About Us</h5>
              </NavLink>

              <NavLink to="/reach" className={style.navlink}>
                <h5 className={style.navlinkHeading}>Reach us</h5>
              </NavLink>

              {!user && (
                <NavLink to="/confirmLogin" className={style.navlink}>
                  <h5 className={style.navlinkHeading}>Login</h5>
                </NavLink>
              )}

              {user && (
                <NavLink to="/logout" className={style.navlink}>
                  <h5 className={style.navlinkHeading}>Logout</h5>
                </NavLink>
              )}
            </div>
          </div>
        )}
      </div>

      <div className={style.headerItems}>
        {user && (
          <>
            <NavLink to="/products" className={style.navlink}>
              <h5 className={style.navlinkHeading}>Products</h5>
            </NavLink>

            <NavLink to="/add" className={style.navlink}>
              <h5 className={style.navlinkHeading}>Add Product</h5>
            </NavLink>
          </>
        )}

        <NavLink to="/initiatives" className={style.navlink}>
          <h5>Initiatives</h5>
        </NavLink>
        <NavLink to="/about" className={style.navlink}>
          <h5>About Us</h5>
        </NavLink>

        <NavLink to="/reach" className={style.navlink}>
          <h5>Reach us</h5>
        </NavLink>

        {!user && (
          <NavLink to="/confirmLogin" className={style.navlink}>
            <h5>Login</h5>
          </NavLink>
        )}

        {user && (
          <NavLink to="/logout" className={style.navlink}>
            <h5>Logout</h5>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
