import React from 'react'

const DeselectItems = (props) => {

  const user = JSON.parse(localStorage.getItem('user'));
  let userId;
  if(user) {
    userId = user.id
  }

  const onClick  = () => {
    props.checkedProducts.forEach(checkedProduct => {
       localStorage.removeItem(`basket/${userId}/${checkedProduct}`) 
    });
  }

  return (
    <div id='deselect-items-container'>
        <a href="" onClick={onClick}> <h3 style={{color:"lightblue"}}> Deselect Items </h3> </a>
    </div>
  )
}

export default DeselectItems