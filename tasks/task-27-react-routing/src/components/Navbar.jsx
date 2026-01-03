import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute left-1/2 py-8 px-8 -translate-x-1/2'>
      <div className='flex gap-12 min-w-fit bg-amber-50 px-6 py-2 rounded-2xl'>
        <div className='font-bold'><Link to={'/'}>Home</Link></div>
        <div className='flex gap-6 text-gray-500'>
          <Link to={'/product'}>Product</Link>
          <Link to={'/features'}>Features</Link>
          <Link to={'/pricing'}>Pricing</Link>
          <Link to={'/about'}>About</Link>
          <Link className='text-black whitespace-nowrap' to={'/login'}>Log in</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar