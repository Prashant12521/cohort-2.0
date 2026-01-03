import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="mb-2 flex justify-between bg-pink-900 px-8 py-4">
        <h2>Navbar</h2>
        <input className='border rounded' type="text" />
        <div className="flex gap-4">
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/product'}>Product</Link>
          <Link to={'/courses'}>Courses</Link>
        </div>
      </div>
  )
}

export default Navbar