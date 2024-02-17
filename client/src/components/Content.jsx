import Card from "./Card.jsx";
import React, { useState, useEffect } from "react";

function Content(props) {
  let products = JSON.parse(localStorage.getItem("products"));
  let category = JSON.parse(localStorage.getItem("category"));
  let filteredProducts = [];
  if (products !== null) {
    products.map((product, index) => {
      if (product.category == category || category == "all") {
        filteredProducts.push(
          <Card
            key={index}
            className={product.category}
            category={product.category}
            title={product.title}
            main_image={product.main_image}
          />
        );
      }
    });
  }
  return <section className="content-section">{filteredProducts}</section>;
}

export default Content;
