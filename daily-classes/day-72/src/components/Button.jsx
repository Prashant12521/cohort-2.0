import React from 'react'

const Button = () => {
  const btnClicked = ()=> {console.log('Clicked!!!');
  }

  return (
    <button 
      onClick={btnClicked}
      className='p-4 m-2 bg-gray-800 rounded-xl text-white font-bold text-xl active:scale-85'>
        Download
    </button>
  )
}

export default Button