import React, {useState, useEffect, useContext} from "react";
import Header from "./Header.jsx";
import ShoppingBasketPageContent from "./ShoppingBasketPageContent.jsx";
import BasketItem from "./BasketItem.jsx";
import { UserContext, TotalItemsInBasket, TotalPrice } from "../App.js";

export const CheckedProducts = React.createContext([]);

const ShoppingBasketPage = () => {

  const [checkedProducts, setCheckedProducts] = useState([])
  
  const [totalItemsInBasket, setTotalItemsInBasket] = useContext(TotalItemsInBasket)
  const [totalPrice, setTotalPrice] = useContext(TotalPrice)
  
  const [quantity, setQuantity] = useState()
  const [user, setUser] = useContext(UserContext)

  const childSetQuantity = (value) => {
    setQuantity(value)
  }

  console.log(checkedProducts)

  let products = JSON.parse(localStorage.getItem("products"));
  let basketProducts = []; // basket product info will be stored here

  let userId;
  if (user) {
    userId = user.id;
  }

  // let totalItemsInBasket = 0
  // let totalPrice = 0

  useEffect(()=> {
    console.log("Inside Subtotal useEffect");
    if (user && user.basket) {
      for (let i = 0; i < user.basket.length ; i++) {
        console.log("Subtotal is being adjusted by adding the item with id: ", user.basket[i].id, " quantity: ", user.basket[i].quantity, " price: ", user.basket[i].current_price, "\n");
        setTotalItemsInBasket(prevTotalItems => prevTotalItems + user.basket[i].quantity)
        setTotalPrice(prevTotalPrice => prevTotalPrice + user.basket[i].current_price * user.basket[i].quantity)
      }
    }
  }, [user])
  console.log("totalItemsInBasket: ", totalItemsInBasket)
  console.log("totalPrice: ", totalPrice)

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
          setTotalPrice={setTotalPrice}
          totalItemsInBasket={totalItemsInBasket}
          setTotalItemsInBasket = {setTotalItemsInBasket}
          itemText={itemText}
        />
      </CheckedProducts.Provider>
    </div>
  );
};

export default ShoppingBasketPage;
