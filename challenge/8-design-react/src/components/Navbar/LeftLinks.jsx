import React from 'react'

const LeftLinks = () => {
  return (
    <div>
      <ul className='flex gap-4'>
        <li className='hover:border-b-purple-700 hover:border-b-2 transition-all duration-200'><a href="#">Services</a></li>
        <li className='hover:border-b-purple-700 hover:border-b-2 hidden md:block transition-all duration-200'><a href="#">Work</a></li>
        <li className='hover:border-b-purple-700 hover:border-b-2 hidden md:block transition-all duration-200'><a href="#">About</a></li>
      </ul>
    </div>
  )
}

export default LeftLinks