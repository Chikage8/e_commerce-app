import React from 'react'
import SelectQuantityDropDown from './SelectQuantityDropDown'
import { ReactComponent as DownArrow } from '../icons/down-arrow.svg'
import { ReactComponent as TrashCan } from '../icons/trash-can.svg'

const QuantitySelector = (props) => {
  return (
    <div>
        <div className='quantity-selector-div'>
            <button className='quantity-selector-button' href="" onClick={()=>props.setSelectQuantity(!props.selectQuantity)}> {props.selectQuantity && <SelectQuantityDropDown setQuantity={props.setQuantity} setSelectQuantity={props.setSelectQuantity} />} {!props.selectQuantity && <div> <p>{props.quantity}</p> <DownArrow /> </div>} </button>
            <div id='trash-can-border'>
                <TrashCan />
            </div>
        </div>
    </div>
  )
}

export default QuantitySelector