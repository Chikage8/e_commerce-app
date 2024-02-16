import React, {useState} from 'react'
import BasketItemLeftCol from './BasketItemLeftCol'
import PropValueInfo from './PropValueInfo'
import QuantitySelector from './QuantitySelector'
import PriceDisplay from './PriceDisplay'

const BasketItem = (props) => {

    const [quantity, setQuantity] = useState(1)
    const [selectQuantity, setSelectQuantity] = useState(false)
    let current_price = (props.item.list_price*(1-(props.item.discount_percentage/100))).toFixed(2)
    let classes = ["basket-item-right-col-price"]

    return (
        <div id='basket-item-content'>
            <div id='basket-item-left-col-container'>
                <BasketItemLeftCol key={props.item.id} item={props.item} checkedProducts={props.checkedProducts}/>
            </div>

            <div id='basket-item-center-col'>
                <p id='product-detailed-title'> {props.item.detailed_title} </p>
                <div id='climate-friendly-badge-wrapper'>
                <img id='climate-friendly-badge' src="https://m.media-amazon.com/images/I/111pigi1ylL.png" alt="" />
                <p id='climate-friendly-text'>Climate Pledge Friendly</p>
                </div>
                <PropValueInfo prop='Brand' value={props.item.brand} />
                <PropValueInfo prop='Color' value={props.item.color} />
                <PropValueInfo prop='Special Features' value={props.item.features} />
                <QuantitySelector selectQuantity={selectQuantity} setSelectQuantity={setSelectQuantity} quantity={quantity} setQuantity={setQuantity} />
            </div>

            <div id='basket-item-right-col'>
                <PriceDisplay price={current_price*quantity} classes={classes}/>
            </div>
        </div>
    )
}

export default BasketItem