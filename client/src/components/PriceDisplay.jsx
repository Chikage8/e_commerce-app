import React from 'react'

const PriceDisplay = (props) => {

  let additionalClasses = []

  if (props.classes) {
    for (let i = 0; i < props.classes.length; i++) {
      additionalClasses.push(props.classes[i])
    }
  }

  return (
    <div id='price-display-container-div' className={additionalClasses}>
        <div className={`left-top-dollar-sign`} >
            $
        </div>
        <div id='price-display-int-part' >
            {Math.trunc(props.price)}
        </div>
        <div id='price-display-decimal-part' className={`price-decimal-part`} >
            {props.price.toString().split('.')[1]}
        </div>
    </div>
  )
}

export default PriceDisplay