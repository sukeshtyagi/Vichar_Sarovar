import React from "react";
import style from "../style/Initiatives.module.css";

function Initiatives() {
  return (
    <div className={style.outerContainer}>
      <div className={style.bannerAndIitiativesContainer}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBnopNpGzg7ZAUVBs4qof_NU26Kakg5H2Ss8dV64ebp_92uKdAiovNSldM3YF3qFlp2g&usqp=CAU"
          alt="bannerImg"
          className={style.bannerImage}
        />
        <div className={style.initiativesContainer1}>
          <img
            src="https://www.crestdatasys.com/wp-content/uploads/2022/09/Edu-5.jpg"
            className={style.initiativeImage}
            alt="inv1"
          />
          <img
            src="https://growbilliontrees.com/cdn/shop/collections/1701474748195.jpg?v=1703505905"
            className={style.initiativeImage}
            alt="inv 2"
          />
        </div>
        <div className={style.initiativesContainer2}>
          <img
            src="https://media.licdn.com/dms/image/C511BAQEvJJtJX__uAQ/company-background_10000/0/1583917627550/freedom_from_hunger_india_trust_cover?e=2147483647&v=beta&t=2xexNer414xSbm63D8BEhG4P6gRahlv9hFPx4hDAyJ8"
            className={style.initiativeImage2}
            alt="inv 3"
          />
        </div>
        <div className={style.initiativesContainer1}>
          <img
            src="https://indiacsr.in/wp-content/uploads/2022/11/Vedanta-Delhi-Half-Marathon-.jpg"
            className={style.initiativeImage3}
            alt="inv 4"
          />
          <img
            src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-02/03/full/1580750299-2905.jpg"
            className={style.initiativeImage3}
            alt="inv 5"
          />
        </div>
      </div>
    </div>
  );
}

export default Initiatives;

/*


       

        
*/
