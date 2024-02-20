import React, { useState } from "react";
import style from "../style/ProductParent.module.css";

function ProductParent({ buttonText1, buttonText2, containerHeading }) {
  const [productData, setProductData] = useState({
    nane: "",
    image: "",
    author: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((productData) => ({
      ...productData,
      [name]: value,
    }));
  };

  const handleDataUpload = async (e) => {
    e.preventDefault();
    console.log(productData);
    const formData = new FormData();

    const url = "http://localhost:4000/products";
    const payload = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(productData),
    };
    try {
      const response = await fetch(url, payload);
      console.log(response);
      if (response.ok) {
        console.log("Data uploaded successfully");
        setProductData({
          name: "",
          image: "",
          author: "",
          price: "",
          category: "",
        });
      }
    } catch (error) {
      console.log("Error >>", error);
    }
  };

  return (
    <div className={style.newProductContainer}>
      <h2>{containerHeading}</h2>
      <form onSubmit={handleDataUpload}>
        <div className={style.newProductDetails}>
          <div className={style.newProductLabels}>
            <label>Name</label>
            <label>Image url</label>
            <label>Author</label>
            <label>Price</label>
            <label>Category</label>
          </div>

          <div className={style.newProductInputs}>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="image"
              value={productData.image}
              onChange={handleChange}
            />

            <input
              type="text"
              name="author"
              value={productData.author}
              onChange={handleChange}
            />

            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
            />

            <input
              type="text"
              name="category"
              value={productData.category}
              onChange={handleChange}
            />
          </div>
        </div>
        <button>{buttonText1}</button>
        {buttonText2 && <button>{buttonText2}</button>}
      </form>
    </div>
  );
}
export default ProductParent;
