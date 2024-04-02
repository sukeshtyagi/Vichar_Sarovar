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
        if (response.ok) {
          const data = await response.json();
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
                  <img src={item.image} alt="product" width={50} height={50} />
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
      {productData.length === 0 && (
        <div className={style.regretMessageContainer}>
          <p className={style.regretMessage}>
            Dear User, I regret to inform you that the specific page you're
            referring to is not accessible in the deployed version, as it relies
            on a JSON server for data storage, which cannot be deployed in the
            traditional sense.
          </p>
          <p className={style.regretMessage}>
            However, I kindly invite you to explore the development version of
            the application by cloning it from our GitHub repository at{" "}
            <span className={style.gitHubRepoSpan}>
              https://github.com/sukeshtyagi/Vichar_Sarovar
            </span>
            .
          </p>
          <p className={style.regretMessage}>
            By following this approach, you'll have the opportunity to
            experience the application firsthand on your local machine. This
            will enable you to explore its functionality and interact with its
            features directly.
          </p>
          <p className={style.regretMessage}>
            Thank you for your understanding, and I look forward to any feedback
            or inquiries you may have as you explore the development version of
            our application. For any feedback or inquiries, please feel free to
            reach out to me at{" "}
            <span className={style.emailSpan}>sukeshtyagi1601@gmail.com</span>.
          </p>
        </div>
      )}
    </div>
  );
}

export default Products;
