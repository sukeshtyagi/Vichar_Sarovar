import React, { useEffect, useState } from "react";
import style from "../style/Product.module.css";
import { NavLink } from "react-router-dom";

function Products() {
  const [productData, setProductData] = useState([]);

  const getProducts = async () => {
    const url = "http://localhost:4000/products";
    try {
      const response = await fetch(url);
      if (response) {
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setProductData(data);
        } else {
          throw new Error("Response generted from website with Error.");
        }
      } else {
        throw new Error("No Response generted from website.");
      }
    } catch (error) {
      console.log("Error >>>", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={style.productsOuterContainer}>
      {productData.length > 0 && (
        <>
          {productData.map((item) => (
            <div className={style.productContainer}>
              <p>
                Rating <span>Update to be done</span>
              </p>
              <div className={style.productDetailsContainer}>
                <div className={style.productImage}>
                  <img
                    src={item.image}
                    alt="image of product"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={style.productDescription}>
                  <p>
                    <span>{item.name}</span>
                  </p>
                  <p>
                    <span>{item.price}</span>
                  </p>
                  <p>
                    <span>{item.author}</span>
                  </p>
                  <p>
                    <span>{item.category}</span>
                  </p>
                </div>
              </div>
              <NavLink to={`/update/${item.id}`}>
                <button>Update Product</button>
              </NavLink>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Products;
