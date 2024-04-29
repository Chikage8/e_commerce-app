import React, { useEffect, useReducer, useState, useContext } from "react";
import { UserContext } from "../App";

const PriceDisplay = (props) => {
  let additionalClasses = [];

  const [user, setUser] = useContext(UserContext);

  const [priceIntegerPart, setPriceIntegerPart] = useState(0);
  const [priceDecimalPart, setPriceDecimalPart] = useState(0);

  // if (props.classes) {
  //   for (let i = 0; i < props.classes.length; i++) {
  //     console.log(typeof props.classes[i])
  //     additionalClasses.push(props.classes[i]);
  //   }
  // }

  console.log(props.price)
  const [, forceUpdate] = useReducer(x => x + 1, 0); // useReducer is just used to force update

  function handleClick() {
    forceUpdate();
  }


  useEffect(()=>{
    adjustSubtotalPrice()
    handleClick()
  }, [props.price, user])

  function adjustSubtotalPrice() {
    setPriceDecimalPart(parseInt(props.price.toString().split(".")[1]))
    setPriceIntegerPart(Math.trunc(parseInt(props.price)))
  }

  // let priceDecimalPart;
  
  // priceDecimalPart = props.price.toString().split(".")[1];
  // console.log(priceDecimalPart) // as intended
  // console.log(typeof priceDecimalPart)
  // let priceIntegerPart = Math.trunc(parseInt(props.price))
  // console.log(priceIntegerPart)
  // console.log(typeof priceIntegerPart)
  
  return (
    <div id="price-display-container-div" className={additionalClasses}>
      <div className={`left-top-dollar-sign`}>$</div>
      <div id="price-display-int-part">{!isNaN(priceIntegerPart) && priceIntegerPart}</div>
      <div id="price-display-decimal-part" className={`price-decimal-part`}>
        {!isNaN(priceDecimalPart) && priceDecimalPart.toString().slice(0,2)}
      </div>
    </div>
  );
};

export default PriceDisplay;
