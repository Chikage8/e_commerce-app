import React, { useContext, useEffect } from 'react'
import { UserContext } from '../App';
import { CheckedProducts } from './ShoppingBasketPage';
import { useNavigate } from 'react-router-dom';
import { TotalItemsInBasket, TotalPrice } from './ShoppingBasketPage';

const DeselectItems = () => {

  const navigate = useNavigate()

  const [user, setUser] = useContext(UserContext)
  const [checkedProducts, setCheckedProducts] = useContext(CheckedProducts)

  const [totalItemsInBasket, setTotalItemsInBasket] = useContext(TotalItemsInBasket);
  const [totalPrice, setTotalPrice] = useContext(TotalPrice);

  function totalItemsInBasketGetter() {
    return totalItemsInBasket;
  }

  function totalItemsInBasketSetter(value) {
    setTotalItemsInBasket(value);
  }

  function totalPriceGetter() {
    return totalPrice
  }

  function totalPriceSetter(value) {
    setTotalPrice(value);
  }

  console.log(checkedProducts)
  console.log(user)

  useEffect(()=>{ 
    navigate("/basket")
  }, [user, setUser])

  // useEffect((navigate("/basket")),[user])

  console.log("BBB")
  const onClick  = () => {
    checkedProducts.forEach(checkedProduct => {
       if (user && user.basket) {
         console.log(user.basket)
        for (let i = 0; i < user.basket.length; i++) {
          if (user.basket[i].id == checkedProduct) {
            // Remove user.basket[i] from user.basket
            console.log("user basket before: ")
            console.log(user.basket)

            let itemCount = totalItemsInBasketGetter();
            let price = totalPriceGetter();

            totalItemsInBasketSetter(itemCount - user.basket[i].quantity);
            totalPriceSetter(price - user.basket[i].quantity * user.basket[i].current_price);

            // if (user.basket[i]) {
            //   setTotalItemsInBasket(value => value - user.basket[i].quantity)
            //   setTotalPrice(value => value - user.basket[i].quantity * user.basket[i].current_price)
            // }
            user.basket.splice(i,1)
            setUser(user)
            sessionStorage.setItem("user", JSON.stringify(user))
            console.log("user basket after: ")
            console.log(user.basket)
          }

        }
       }
    });
    setCheckedProducts([])
  }

  return (
    <div id='deselect-items-container'>
        <button id='deselect-button' href="" onClick={onClick}> <h3 style={{color:"lightblue"}}> Deselect Items </h3> </button>
    </div>
  )
}

export default DeselectItems