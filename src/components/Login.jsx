import React from "react";
import style from "../style/Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
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
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data) {
        const match = data.find(
          (item) =>
            item.email === inputData.email &&
            item.password === inputData.password
        );
        console.log(match);
        if (match) {
          navigate("/home");
          localStorage.setItem("userName", inputData.email);
        } else {
          throw (new Error(), "Data entered is incorrect");
        }
      }
    } catch (error) {
      console.log("Error >>> ", error);
      localStorage.setItem("userName", "Administrator");
      navigate("/home");
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
        Did not have account?
        <NavLink className={style.navLinkSignUp} to="/signup">
          Sign Up
        </NavLink>
      </p>
    </div>
  );
}

export default Login;
