import React from "react";
import { useParams } from "react-router-dom";
import ProductParent from "./ProductParent";

function UpdateProduct() {
  const params = useParams();
  const { id } = params;
  return (
    <>
      <ProductParent
        containerHeading="Update Product"
        buttonText1=" Edit"
        buttonText2=" Delete"
      />
    </>
  );
}

export default UpdateProduct;
