import React from 'react'

const BasketItemLeftCol = (props) => {

    const onCheckboxChange = (e) => {   
        if (e.target.checked) {
            props.checkedProducts.push(props.item.id)
        } else {
            props.checkedProducts.filter((product) => {
                return product !== props.item.id
            })
        }
    }

    return (
        <div>
            <input type="checkbox" name={`shopping-basket-deselect-checkbox${props.item.id}`} id={`shopping-basket-deselect-checkbox${props.item.id}`} onChange={onCheckboxChange} />
            <img key={`${props.item.id}`} id='shopping-basket-img' src={props.item.main_image} alt="" /> 
        </div>
    )
}

export default BasketItemLeftCol