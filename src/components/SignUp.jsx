import React from "react";
import style from "../style/Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((inputData) => ({
      ...inputData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputData);
    const url = "http://localhost:4000/users";
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(inputData),
    };
    try {
      const response = await fetch(url, payload);
      if (response.ok) {
        console.log("data uploaded successfully");
        navigate("/home");
        localStorage.setItem("userName", inputData.email);
      }
    } catch (error) {
      console.log("Error >>> ", error);
    }
  };

  return (
    <div className={style.loginContainer}>
      <div className={style.loginHeadingContainer}>
        <NavLink className={style.navLink} to="/home">
          <p>{"<<"} Home</p>
        </NavLink>
      </div>
      <div className={style.loginDetailsContainer}>
        <label>User Name</label>
        <input
          type="text"
          name="email"
          value={inputData.email}
          onChange={handleInputChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={inputData.password}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Login</button>
      </div>
      <p className={style.navLinkSignUpPara}>
        Have an account?
        <NavLink className={style.navLinkSignUp} to="/ConfirmLogin">
          Sign In
        </NavLink>
      </p>
    </div>
  );
}

export default SignUp;
