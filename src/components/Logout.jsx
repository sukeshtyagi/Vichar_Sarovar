import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate=useNavigate()
  navigate('/home')
  localStorage.removeItem("userName");
  return <></>;
}

export default Logout;
