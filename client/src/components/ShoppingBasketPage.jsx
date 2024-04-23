import React, {useState, useEffect, useContext} from "react";
import Header from "./Header.jsx";
import ShoppingBasketPageContent from "./ShoppingBasketPageContent.jsx";
import BasketItem from "./BasketItem.jsx";
import { UserContext } from "../App.js";

export const CheckedProducts = React.createContext({});
export const QuantityChanged = React.createContext(false);
export const TotalItemsInBasket = React.createContext(0);
export const TotalPrice = React.createContext(0);


const ShoppingBasketPage = () => {

  const [checkedProducts, setCheckedProducts] = useState([])
  const [quantityChanged, setQuantityChanged] = useState(false)

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

  // let totalItemsInBasket = 0
  // let totalPrice = 0

  const [totalItemsInBasket, setTotalItemsInBasket] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(()=> {
    if (user && user.basket) {
      for (let i = 0; i < user.basket.length ; i++) {
        setTotalItemsInBasket(totalItemsInBasket + user.basket[i].quantity)
        setTotalPrice(totalPrice + user.basket[i].current_price * user.basket[i].quantity)
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
      <TotalPrice.Provider value={[totalPrice, setTotalPrice]}>
        <TotalItemsInBasket.Provider value={[totalItemsInBasket, setTotalItemsInBasket]}>
          <QuantityChanged.Provider value={[quantityChanged, setQuantityChanged]}>
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
          </QuantityChanged.Provider>
        </TotalItemsInBasket.Provider>
      </TotalPrice.Provider>
    </div>
  );
};

export default ShoppingBasketPage;
