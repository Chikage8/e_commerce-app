import React from 'react'

const DeselectItems = (props) => {

  const onClick  = () => {
    props.checkedProducts.forEach(checkedProduct => {
       localStorage.removeItem(`basket/${checkedProduct}`) 
    });
  }

  return (
    <div id='deselect-items-container'>
        <a href="" onClick={onClick}>Deselect Items</a>
    </div>
  )
}

export default DeselectItems