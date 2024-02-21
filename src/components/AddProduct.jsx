import React, { useState } from "react";
import ProductParent from "./ProductParent";

function AddProduct() {
  const [productData, setProductData] = useState({
    name: "",
    image: "",
    author: "",
    price: "",
    category: "",
  });

  const handleDataUpload = async (e) => {
    e.preventDefault();
    console.log(productData);

    const url = "http://localhost:4000/products";
    const payload = {
      method: "POST",
      headers: {
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
    <ProductParent
      containerHeading="Add Product"
      uploadButton="Upload Data"
      productData={productData}
      setProductData={setProductData}
      handleDataUpload={handleDataUpload}
    />
  );
}

export default AddProduct;
