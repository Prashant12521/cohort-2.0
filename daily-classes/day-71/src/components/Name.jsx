import React from 'react'

const Name = (props) => {
  console.log(props);
  

  return (
    <div>{props.user}, {props.age}</div>
  )
}

export default Name