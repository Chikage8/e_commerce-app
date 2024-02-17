import React, { useState, useEffect } from "react";
import { ReactComponent as EmptyStar } from "../icons/emptyStar.svg";
import { ReactComponent as HalfStar } from "../icons/halfStar.svg";
import { ReactComponent as FullStar } from "../icons/fullStar.svg";
import PropValueInfo from "./PropValueInfo";
import PriceDisplay from "./PriceDisplay";
import AboutItem from "./AboutItem";

const ProductInfo = (props) => {
  let products = JSON.parse(localStorage.getItem("products"));
  let product = products.find((prod) => prod.id == props.id);
  let current_price = (
    product.list_price *
    (1 - product.discount_percentage / 100)
  ).toFixed(2);
  let fullStarCount = 0;
  let halfStar = false;
  let stars = [];

  useEffect(() => {
    fetch(`http://localhost:5000/${product.category}/${props.id}`)
      .then((response) => response.json())
      .then((data) =>
        localStorage.setItem(
          `${product.category}${props.id}`,
          JSON.stringify(data[0])
        )
      );
  }, []);

  const [thisProduct, setThisProduct] = useState(
    JSON.parse(localStorage.getItem(`${product.category}${props.id}`))
  );
  const [productSpecificPropValue, setProductSpecificPropValue] = useState([]);
  const [productAboutInfo, setProductAboutInfo] = useState([]);
  let productSpecificPropValueRef;
  let productAboutInfoRef;
  if (thisProduct !== null) {
    for (let i = 2; i < Object.keys(thisProduct).length; i++) {
      productSpecificPropValueRef = productSpecificPropValue;
      productAboutInfoRef = productAboutInfo;
      let keyy = Object.keys(thisProduct)[i];
      keyy = formatKey(keyy);
      if (keyy.substring(0, 5) == "About") {
        productAboutInfoRef.push(Object.values(thisProduct)[i]);
      } else {
        productSpecificPropValueRef.push(
          <PropValueInfo
            key={i}
            prop={keyy}
            value={Object.values(thisProduct)[i]}
          />
        );
      }
    }
  }

  String.prototype.replaceAt = function (index, replacement) {
    return (
      this.substring(0, index) +
      replacement +
      this.substring(index + replacement.length)
    );
  };

  function replaceAt(str, index, replacement) {
    return (
      str.substring(0, index) +
      replacement +
      str.substring(index + replacement.length)
    );
  }

  function formatKey(keyy) {
    for (let i = 0; i < keyy.length; i++) {
      if (i == 0) {
        keyy = replaceAt(keyy, 0, keyy.charAt(0).toUpperCase());
      }
      if (keyy[i] == "_") {
        keyy = replaceAt(keyy, i, " ");
        keyy = replaceAt(keyy, i + 1, keyy.charAt(i + 1).toUpperCase());
      }
    }
    return keyy;
  }

  function adjustStars(rating) {
    while (rating >= 1) {
      fullStarCount += 1;
      rating -= 1;
    }
    if (rating == 0) {
      halfStar = false;
    } else {
      halfStar = true;
    }
  }

  adjustStars(product.rating);

  for (let i = 0; i < fullStarCount; i++) {
    stars.push(<FullStar />);
  }
  if (halfStar) {
    stars.push(<HalfStar />);
  }

  let emptyCount = 5 - fullStarCount - halfStar;
  for (let i = 0; i < emptyCount; i++) {
    stars.push(<EmptyStar />);
  }

  return (
    <div id="product-info-container">
      <p id="product-detailed-title"> {product.detailed_title} </p>
      <a
        id="product-brand-store-link"
        href="https://www.amazon.com/stores/LogitechG/page/0F4BFDF6-CD4A-4A8C-83A2-3104165D740C?ref_=ast_bln"
      >
        Visit the Logitech G Store{" "}
      </a>
      <br />
      <div id="product-info-rating-div">
        {product.rating}
        <div id="rating-stars-div">{stars}</div>
        <div>{product.review_count} ratings | Search this page</div>
      </div>
      <div id="ac-badge-wrapper">
        <span className="a-declarative black-background">
          {" "}
          Azamon's Choice{" "}
        </span>
        <span className="ac-for-text"> Overall Pick </span>
      </div>
      <div id="climate-friendly-badge-wrapper">
        <img
          id="climate-friendly-badge"
          src="https://m.media-amazon.com/images/I/111pigi1ylL.png"
          alt=""
        />
        <p id="climate-friendly-text">Climate Pledge Friendly</p>
      </div>

      <hr />
      <div id="price-div">
        <div id="current-price-div">
          <div id="discount-display-div">-{product.discount_percentage}%</div>
          <div id="discounted-price-div">
            <PriceDisplay price={current_price} />
          </div>
        </div>
        <div id="original-price-div">
          List Price:{" "}
          <div id="original-price-list-price-div"> ${product.list_price} </div>
        </div>
      </div>
      <div className="general-info-div">
        <PropValueInfo prop="Brand" value="Logitech" />
        <PropValueInfo prop="Color" value="Black" />
        <PropValueInfo prop="Special Features" value={product.features} />
        {productSpecificPropValue}
        {/* <PropValueInfo {  thisProduct} */}
      </div>
      <hr />
      <AboutItem productAboutInfo={productAboutInfo} />
    </div>
  );
};

export default ProductInfo;
