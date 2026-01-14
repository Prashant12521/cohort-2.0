import React from 'react'
import logo from '../../assets/navbar/logo.png'

const Logo = () => {
  return (
    <a href="#" className='mx-auto flex justify-center items-center font-semibold hover:text-purple-700 duration-300'>
      <img src={logo} alt="" className='mr-1 h-6 object-contain object-center md:mr-2 md:h-10'/>
      <span className='text-[clamp(1.25rem,2.5vw,1.875rem)]'>Astratto</span>
    </a>
  )
}

export default Logo