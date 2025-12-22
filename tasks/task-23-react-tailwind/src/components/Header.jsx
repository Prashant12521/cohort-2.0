import React from 'react'
import heroImg from '../assets/img/hero.png'

const Header = () => {
  return (
    <header className='px-4 pt-2 h-screen'>
      <nav className='navbar w-full h-[5%] flex justify-between items-center'>
        
        <div className="logo text-3xl cursor-pointer">DVSY</div>

        <div className="nav-link flex items-center gap-2">
          <ul className='flex items-center gap-2 text-sm'>
            <li className='px-2 py-1.5 bg-[#2a2b2c] rounded-md cursor-pointer'>DESIGNERS</li>
            <li className='px-2 py-1.5 bg-[#2a2b2c] rounded-md cursor-pointer'>COLLABS</li>
            <li className='px-2 py-1.5 bg-[#2a2b2c] rounded-md cursor-pointer'>EVENTS</li>
            <li className='px-2 py-1.5 bg-[#2a2b2c] rounded-md cursor-pointer'>BLOG</li>
            <li className='px-2 py-1.5 bg-[#2a2b2c] rounded-md cursor-pointer'>CARD</li>
            <li className='px-2 py-1.5 bg-orange-400 text-black rounded-md cursor-pointer'>GET IN TOUCH</li>
          </ul>
        </div>
        
      </nav>

      <section className='my-2 hero h-[90%] bg-cover bg-top rounded-md relative' style={{ backgroundImage: `url(${heroImg})`}}>

        <div className='absolute bottom-20 left-20'>
          <div className='relative'>
            <h1 className='text-9xl font-light'>DESIGN <br /><span className='text-transparent'>.....</span>& FREEDOM</h1>

            <p className='absolute left-45'>Explore Independent Style by Embracing Uniqueness <br />with Our Exclusive Designer Apparel</p>

            <div className='absolute right-[-40%] flex items-center gap-4 cursor-pointer'>
              <i className="ri-arrow-down-line text-2xl border px-2 py-1 border-white rounded-full bg-[#2a2b2c]"></i>
              <span className='uppercase'>Learn More</span>
            </div>
          </div>
        </div>

      </section>
    </header>
  )
}

export default Header