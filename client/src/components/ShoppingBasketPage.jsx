import React, {useState, useEffect, useContext} from "react";
import Header from "./Header.jsx";
import ShoppingBasketPageContent from "./ShoppingBasketPageContent.jsx";
import BasketItem from "./BasketItem.jsx";
import { UserContext } from "../App.js";

export const CheckedProducts = React.createContext({});

const ShoppingBasketPage = () => {

  const [checkedProducts, setCheckedProducts] = useState([])

  const [quantity, setQuantity] = useState()
  const childSetQuantity = (value) => {
    setQuantity(value)
  }

  console.log(checkedProducts)

  let products = JSON.parse(localStorage.getItem("products"));
  let basketProducts = []; // basket product info will be stored here

  const [user, setUser] = useContext(UserContext)
  let userId;
  if (user) {
    userId = user.id;
  }

  let totalItemsInBasket = 0
  let totalPrice = 0
  if (user && user.basket) {
    for (let i = 0; i < user.basket.length ; i++) {
      totalItemsInBasket += user.basket[i].quantity
      totalPrice += user.basket[i].current_price
    }
  }

  let itemText = 'item'
  if (parseInt(totalItemsInBasket) > 1) {
    itemText += 's'
  }
  console.log(user)

  if (user && 'basket' in user ) {
    console.log("USER BASKET: ")
    console.log(user.basket)
  }

  return (
    <div>
      <CheckedProducts.Provider value={[checkedProducts, setCheckedProducts]}>
        <Header quantity={quantity} />
        <ShoppingBasketPageContent 
          quantity={quantity}
          childSetQuantity={childSetQuantity} 
          checkedProducts={checkedProducts}
          basketProducts={basketProducts} 
          userId={userId}  
          totalPrice={totalPrice}
          item_count={totalItemsInBasket}
          itemText={itemText}
        />
      </CheckedProducts.Provider>
    </div>
  );
};

export default ShoppingBasketPage;
