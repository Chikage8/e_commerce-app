import React, { useContext, useEffect } from 'react'
import { UserContext } from '../App';
import { CheckedProducts } from './ShoppingBasketPage';
import { useNavigate } from 'react-router-dom';

const DeselectItems = () => {

  const navigate = useNavigate()

  const [user, setUser] = useContext(UserContext)
  const [checkedProducts, setCheckedProducts] = useContext(CheckedProducts)

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
          if (user.basket[i].id = checkedProduct) {
            // Remove user.basket[i] from user.basket
            console.log("user basket before: ")
            console.log(user.basket)
            setUser(user.basket.splice(i,1))
            sessionStorage.setItem("user", JSON.stringify(user))
            navigate("/basket")
            console.log("user basket after: ")
            console.log(user.basket)
          }

        }
       }
    });
  }

  return (
    <div id='deselect-items-container'>
        <button id='deselect-button' href="" onClick={onClick}> <h3 style={{color:"lightblue"}}> Deselect Items </h3> </button>
    </div>
  )
}

export default DeselectItems