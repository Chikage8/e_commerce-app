import React, { Children } from 'react'

const SelectQuantityDropDown = (props) => {

    const handleClick = (e) => {
        props.setQuantity(e.target.textContent);
        props.setSelectQuantity(false);
    }

    return (
        <div id='quantity-selector-dropdown'> 
            <div onClick={handleClick} className='select-quantity-dropdown-option small-top-margin'><p>1</p></div>
            <div onClick={handleClick} className='select-quantity-dropdown-option'><p>2</p></div>
            <div onClick={handleClick} className='select-quantity-dropdown-option'><p>3</p></div>
            <div onClick={handleClick} className='select-quantity-dropdown-option'><p>4</p></div>
            <div onClick={handleClick} className='select-quantity-dropdown-option'><p>5</p></div>
        </div>
    )
}

export default SelectQuantityDropDown