import React, {useState} from 'react'
import BasketItemLeftCol from './BasketItemLeftCol'
import PropValueInfo from './PropValueInfo'
import QuantitySelector from './QuantitySelector'

const BasketItem = (props) => {

    const [quantity, setQuantity] = useState(1)
    const [selectQuantity, setSelectQuantity] = useState(false)

    return (
        <div>
            <div id='shopping-basket-left-col'>
                <BasketItemLeftCol key={props.item.id} item={props.item} checkedProducts={props.checkedProducts}/>
            </div>

            <div id='shopping-basket-right-col'>
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
        </div>
    )
}

export default BasketItem