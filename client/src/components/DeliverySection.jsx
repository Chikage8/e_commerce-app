import React, {useState} from 'react'

const DeliverySection = (props) => {
  let date = new Date();
  date.setDate(date.getDate() + 3);

  // const [date, setDate] = useState(new Date())
  return (
    <div id='delivery-section-wrapper'>
      <p id='delivery-section-price-text'> ${(props.current_price*0.1).toFixed(2)} Shipping & Import Fees </p>
      <div id='delivery-section-delivery-date'> <p>Delivery {' '} </p>  <p id='date-p' className='bold-p'> {date.toString().substring(0, 16)} </p> </div>
    </div>
  )
}

export default DeliverySection