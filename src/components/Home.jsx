import React from "react";
import style from "../style/Home.module.css";
import Carousel from "./Carousel";

function Home() {
  return (
    <>
      <div className={style.homeContainer}>
        <Carousel />
        <div className={style.homeContainerText}>
          <p> 
            Those Who Love Reading Books Have Everything In Their Reach</p>
        </div>
      </div>
    </>
  );
}

export default Home;
