import React, { useState } from "react";
import style from "../style/AddProduct.module.css";

function AddProduct() {
  const [productData, setProductData] = useState({
    name: "",
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

  const handleImageChange = (e) => {
    setProductData((productData) => ({
      ...productData,
      image: e.target.value,
    }));
  };

  const handleDataUpload = async (e) => {
    e.preventDefault();
    console.log(productData);
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("image", productData.image);
    formData.append("author", productData.author);
    formData.append("price", productData.price);
    formData.append("category", productData.category);

    const url = "http://localhost:4000/products";
    const payload = {
      method: "POST",
      body: formData,
    };
    try {
      const response = await fetch(url, payload);
      if (response.ok) {
        console.log("Data uploaded successfully");
      }
    } catch (error) {
      console.log("Error >>", error);
    }
  };

  return (
    <div className={style.newProductContainer}>
      <h2>Add Product</h2>
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
              onChange={handleImageChange}
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
        <button>Upload Data</button>
      </form>
    </div>
  );
}
export default AddProduct;
