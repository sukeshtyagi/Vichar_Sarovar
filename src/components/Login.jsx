import React from "react";
import style from "../style/Login.module.css";

function Login() {
  return (
    <div className={style.loginContainer}>
      <div className={style.loginHeadingContainer}>
        <p>Login</p>
      </div>
      <div className={style.loginDetailsContainer}>
        <label >User Name</label>
        <input type="text" />
        <label >Password</label>
        <input type="password" />
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
