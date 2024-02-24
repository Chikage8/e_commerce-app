import React from "react";

const PriceDisplay = (props) => {
  let additionalClasses = [];

  // if (props.classes) {
  //   for (let i = 0; i < props.classes.length; i++) {
  //     console.log(typeof props.classes[i])
  //     additionalClasses.push(props.classes[i]);
  //   }
  // }

  console.log(props.price) // correct here

  let priceDecimalPart;
  
  priceDecimalPart = props.price.toString().split(".")[1];
  console.log(priceDecimalPart) // as intended
  console.log(typeof priceDecimalPart)
  let priceIntegerPart = Math.trunc(parseInt(props.price))
  console.log(priceIntegerPart)
  console.log(typeof priceIntegerPart)
  
  return (
    <div id="price-display-container-div" className={additionalClasses}>
      <div className={`left-top-dollar-sign`}>$</div>
      <div id="price-display-int-part">{!isNaN(priceIntegerPart) && priceIntegerPart}</div>
      <div id="price-display-decimal-part" className={`price-decimal-part`}>
        {!isNaN(priceDecimalPart) && priceDecimalPart}
      </div>
    </div>
  );
};

export default PriceDisplay;
