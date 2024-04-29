import React, { useContext, useEffect } from 'react'
import { UserContext, TotalItemsInBasket, TotalPrice } from '../App';
import { CheckedProducts } from './ShoppingBasketPage';
import { useNavigate } from 'react-router-dom';

const DeselectItems = () => {

  const navigate = useNavigate()

  const [user, setUser] = useContext(UserContext)
  const [checkedProducts, setCheckedProducts] = useContext(CheckedProducts)

  const [totalItemsInBasket, setTotalItemsInBasket] = useContext(TotalItemsInBasket);
  let totalItemsInBasketCopy = totalItemsInBasket;

  const [totalPrice, setTotalPrice] = useContext(TotalPrice);
  let totalPriceCopy = totalPrice;

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

  useEffect(()=>{
    onClick();
  },[totalItemsInBasket, totalPrice])

  // useEffect((navigate("/basket")),[user])

  console.log("BBB")
  const onClick  = () => {
    checkedProducts.forEach(checkedProduct => {
       if (user && user.basket) {
         console.log(user.basket)
        for (let i = 0; i < user.basket.length; i++) {
          if (user.basket[i].id === checkedProduct) {
            user.basket.splice(i,1)
            setUser(user)
            sessionStorage.setItem("user", JSON.stringify(user))
          }
        }
        totalItemsInBasketCopy = 0;
        totalPriceCopy = 0;
        for (let i = 0; i < user.basket.length; i++) {
          totalItemsInBasketCopy += user.basket[i].quantity
          totalPriceCopy += user.basket[i].quantity * user.basket[i].current_price
        }
       }
    });
    setTotalItemsInBasket(totalItemsInBasketCopy);
    setTotalPrice(totalPriceCopy);
    setCheckedProducts([])
  }

  return (
    <div id='deselect-items-container'>
        <button id='deselect-button' href="" onClick={onClick}> <h3 style={{color:"lightblue"}}> Deselect Items </h3> </button>
    </div>
  )
}

export default DeselectItems