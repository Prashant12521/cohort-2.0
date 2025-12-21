import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <div className='nav'>
      <h3>Horizon Courts</h3>
      <ul>
        <li>About Us</li>
        <li>Services</li>
        <li>Coaches</li>
        <li>Events</li>
        <li>Contacts</li>
      </ul>
      <button>Book now<i class="ri-arrow-right-up-long-line"></i></button>
    </div>
  )
}

export default Nav