import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/"); 
    localStorage.removeItem("userName"); 
  }, [navigate]);

  return null; 
}

export default Logout;
