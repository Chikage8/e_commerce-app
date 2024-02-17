import React from "react";

const MainPicture = (props) => {
  let products = JSON.parse(localStorage.getItem("products"));
  let thisProduct;

  products.map((product, index) => {
    if (product.id == props.id) {
      thisProduct = product;
    }
  });

  return (
    <div id="main-picture-container">
      <img src={thisProduct.main_image} alt="" />
    </div>
  );
};

export default MainPicture;
