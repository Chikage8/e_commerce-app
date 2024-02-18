import React, { useState, useEffect } from "react";
import ShoppingBasket from "./ShoppingBasket";
import PriceDisplay from "./PriceDisplay";

const ShoppingBasketPageContent = (props) => {

  const [quantity, setQuantity] = useState()
  const childSetQuantity = (value) => {
    setQuantity(value)
  }

  let checkedProducts = [];

  let products = JSON.parse(localStorage.getItem("products"));
  let basketProducts = []; // basket product info will be stored here

  const user = JSON.parse(localStorage.getItem("user"));
  let userId;
  if (user) {
    userId = user.user.id;
  }

  console.log("setting user basket as empty array");
  let userBasket = [];
  let basketItemIds = [];
  // Storing basket Items for the user on the userBasket array as objects with format: product_id: {product info key value pairs}
  for (let i = 0; i < localStorage.length; i++) {
    if (
      localStorage.key(i).substring(0, 7) == `basket/` &&
      localStorage.key(i).split("/")[1] == userId &&
      localStorage.key(i).split("/").length > 2 &&
      localStorage.key(i).split("/")[2] !== "undefined"
    ) {
      let basketItemId = localStorage.key(i).split("/")[2];
      console.log(basketItemId);
      let basketItemContentObject = JSON.parse(
        localStorage.getItem(
          `basket/${localStorage.key(i).split("/")[1]}/${
            localStorage.key(i).split("/")[2]
          }`
        )
      );
      userBasket.push({ [basketItemId]: basketItemContentObject });
      basketItemIds.push(basketItemId);
    }
  }

  // get the product information for the items in basket
  basketItemIds.forEach((id) => {
    products.forEach((product) => {
      if (id == product.id) {
        basketProducts.push(product);
      }
    });
  });

  let totalPrice = 0;
  const [itemCount, setItemCount ] = useState(0);
  let item_count 
  for (let i = 0; i < userBasket.length; i++) {
    let itemId = basketItemIds[i];
    console.log(userBasket[i][itemId].quantity);
    let objectQuantity = userBasket[i][itemId].quantity;
    let objectUnitPrice = userBasket[i][itemId].current_price;
    let objectTotalPrice = objectQuantity * objectUnitPrice;
    item_count = itemCount
    item_count += objectQuantity;
    totalPrice += objectTotalPrice;
  }
  
  // Calculate totalPrice and item_count
  const CalculateBasket = () => {
    for (let i = 0; i < userBasket.length; i++) {
      let itemId = basketItemIds[i];
      console.log(userBasket[i][itemId].quantity);
      let objectQuantity = userBasket[i][itemId].quantity;
      let objectUnitPrice = userBasket[i][itemId].current_price;
      let objectTotalPrice = objectQuantity * objectUnitPrice;
      item_count = itemCount
      item_count += objectQuantity;
      totalPrice += objectTotalPrice;
    }
  }
  
  useEffect(()=>{
    CalculateBasket()
  },[userBasket])

  let itemText = 'item'
  if (parseInt(item_count) > 1) {
    itemText += 's'
  }

  return (
    <div id="basket-content-container">
      <div id="basket-content-left-col">
        <ShoppingBasket
          checkedProducts={checkedProducts}
          basketItemIds={basketItemIds}
          quantity={quantity}
          childSetQuantity={childSetQuantity}
        />
      </div>
      <div id="basket-content-right-col">
        <p>Subtotal({parseInt(item_count) + " "}  {itemText} ) </p>
        <PriceDisplay price={totalPrice} />
        <button className="checkout-button">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default ShoppingBasketPageContent;
