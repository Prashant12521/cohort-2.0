import React from 'react'

const Card = () => {
  return (
    <div className='w-[23vw] h-90 rounded-xl py-5 px-8 flex flex-col items-center text-center bg-white text-black'>
      <img className='h-24 w-24 rounded-full object-cover object-center' src="https://images.unsplash.com/photo-1766467090654-9b0eb36c1adb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1 className='text-2xl mt-2 font-bold'>Prashant Kumar</h1>
      <h5 className='text-blue-500 text-lg font-semibold my-2'>Developer</h5>
      <p className='text-sm font-medium leading-tight'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ex saepe, voluptas vitae consequuntur corrupti. Illo praesentium quis fugit ducimus? Facilis error vero nisi provident similique reprehenderit fugit eaque minima.</p>
      <button className='px-4 py-2 rounded bg-red-600 text-xs cursor-pointer active:scale-95 text-white font-semibold mt-3'>Remove</button>
    </div>
  )
}

export default Card