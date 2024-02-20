import React, {useState, useEffect, useContext} from "react";
import Header from "./Header.jsx";
import ShoppingBasketPageContent from "./ShoppingBasketPageContent.jsx";
import BasketItem from "./BasketItem.jsx";
import { UserContext } from "../App.js";

const ShoppingBasketPage = () => {

  const [quantity, setQuantity] = useState()
  const childSetQuantity = (value) => {
    setQuantity(value)
  }

  let checkedProducts = [];

  let products = JSON.parse(localStorage.getItem("products"));
  let basketProducts = []; // basket product info will be stored here

  const [user, setUser] = useContext(UserContext)
  let userId;
  if (user) {
    userId = user.id;
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

  let basketItems = []

  basketProducts.forEach((product) => {
    basketItems.push(
      <BasketItem
        key={product.id}
        item={product}
        checkedProducts={checkedProducts}
        quantity={quantity}
        childSetQuantity={childSetQuantity}
      />
    );
  });
  
  let itemText = 'item'
  if (parseInt(item_count) > 1) {
    itemText += 's'
  }

  return (
    <div>
      <Header quantity={quantity} />
      <ShoppingBasketPageContent 
        quantity={quantity}
        childSetQuantity={childSetQuantity} 
        checkedProducts={checkedProducts}
        basketProducts={basketProducts} 
        userId={userId}  
        userBasket={userBasket}
        basketItemIds={basketItemIds}
        basketItems={basketItems}
        totalPrice={totalPrice}
        item_count={item_count}
        itemText={itemText}
      />
    </div>
  );
};

export default ShoppingBasketPage;
