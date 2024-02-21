import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductParent from "./ProductParent";

function UpdateProduct() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    image: "",
    author: "",
    price: "",
    category: "",
  });

  const params = useParams();
  const { id } = params;

  const getProductData = async () => {
    console.log(productData, id);

    const url = `http://localhost:4000/products/${id}`;
    console.log(url);

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log("Data extracted successfully");
        setProductData(data);
      }
    } catch (error) {
      console.log("Error >>", error);
    }
  };

  const handleDataUpdate = async () => {
    console.log(productData, id);

    const url = `http://localhost:4000/products/${id}`;
    const payload = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(productData),
    };
    try {
      const response = await fetch(url, payload);
      if (response.ok) {
        navigate("/products");
        console.log("Data updated successfully");
      }
    } catch (error) {
      console.log("Error >>", error);
    }
  };

  return (
    <>
      <ProductParent
        containerHeading="Update Product"
        updateButton="Update"
        deleteButton=" Delete"
        productData={productData}
        setProductData={setProductData}
        getProductData={getProductData}
        handleDataUpdate={handleDataUpdate}
        navigate={navigate}
      />
    </>
  );
}

export default UpdateProduct;

/*

*/
