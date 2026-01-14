import React from 'react'

const RightLinks = () => {
  return (
    <div>
      <ul className='flex gap-4 items-center'>
        <li className='hover:border-b-purple-700 hover:border-b-2 transition-all duration-200 hidden md:block'><a href="#">Career</a></li>
        <li className='px-3 py-1 border-2 border-yellow-400 rounded-3xl cursor-pointer hover:border-purple-500 transition-all duration-200'><a href="#">Contact Us</a></li>
      </ul>
    </div>
  )
}

export default RightLinks