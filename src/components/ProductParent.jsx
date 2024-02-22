import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "../style/ProductParent.module.css";

function ProductParent({
  productData,
  setProductData,
  containerHeading,
  uploadButton,
  handleDataUpload,
  updateButton,
  deleteButton,
  getProductData,
  handleDataUpdate,
  handleDataDelete,
}) {
  useEffect(() => {
    if (getProductData) {
      getProductData();
    }
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((productData) => ({
      ...productData,
      [name]: value,
    }));
  };

  const handleDataUploadAndNavigate = async () => {
    navigate("/products");
    await handleDataUpload();
  };

  const handleDataUpdateAndNavigate = async () => {
    navigate("/products");
    await handleDataUpdate();
  };

  const handleDataDeleteAndNavigate = async () => {
    navigate("/products");
    await handleDataDelete();
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
        {uploadButton && (
          <button onClick={handleDataUploadAndNavigate}>{uploadButton}</button>
        )}

        {updateButton && (
          <button onClick={handleDataUpdateAndNavigate}>{updateButton}</button>
        )}
        {deleteButton && (
          <button onClick={handleDataDeleteAndNavigate}>{deleteButton}</button>
        )}
      </form>
    </div>
  );
}
export default ProductParent;
