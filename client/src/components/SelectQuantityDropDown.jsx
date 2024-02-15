import React from 'react'

const SelectQuantityDropDown = (props) => {

    return (
        <div id='quantity-selector-dropdown'> 
            <p onClick={() => {props.setQuantity(1);props.setSelectQuantity(false);}}>1</p>
            <p onClick={() => {props.setQuantity(2);props.setSelectQuantity(false);}}>2</p>
        </div>
    )
}

export default SelectQuantityDropDown