import React from 'react'

const PropValueInfo = (props) => {
  return (
    <span className='inline-span smaller-fonts'><h3>{props.prop}</h3> <p>{props.value}</p> </span>
  )
}

export default PropValueInfo