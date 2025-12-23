import React from 'react'

const Button = (props) => {
  console.log(props);
  

  return (
    <div className='px-4 py-2 m-2 bg-red-500 w-fit rounded text-xl font-bold'>
      {props.text}
    </div>
  )
}

export default Button