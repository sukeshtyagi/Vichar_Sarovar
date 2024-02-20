import React from "react";
import style from "../style/Product.module.css";

function Products() {
  return (
    <div className={style.productsOuterContainer}>
      <div className={style.productContainer}>
        <p>
          Rating <span>Update to be done</span>
        </p>
        <div className={style.productDetailsContainer}>
          <div className={style.productImage}>
            <img src="" alt="image of product" />
          </div>
          <div className={style.productDescription}>
            <p>
              <span>Show name here</span>
            </p>
            <p>
              <span>Show price here</span>
            </p>
            <p>
              <span>Show author here</span>
            </p>
            <p>
              <span>Show category here</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
