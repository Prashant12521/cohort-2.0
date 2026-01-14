import React from 'react'
import star from '../../assets/footer/star.png';
import logo from '../../assets/footer/logo-text.png';

const Footer = () => {
  return (
    <div className='py-2 px-6 border border-gray-300 rounded-4xl'>
      <div className='text-center py-4 w-fit mx-auto relative'>
        <p className='text-[.7rem] md:text-sm text-purple-700'>Open the door to lorging your brand's story</p>
        <h2 className='text-sm md:text-2xl lg:text-3xl xl:text-5xl py-2 md:py-4'>Embark on a Transformative Journey <br />Shaping <span className='px-2 py-1 rounded-xl text-white bg-yellow-400 rotate-1 inline-block'>Your Brand's Destiny</span> Through Our <br />Dedicated Partnership</h2>
        <span className='text-[0.5rem] md:text-xs leading-tight block text-gray-400 pt-2'>Join us on a transformative journey to shope your brand's destiny through our <br />dedicated partnership, crafting a natalie that resonates</span>

        <div className='absolute top-4 left-0'><img src={star} className='h-8 md:h-12'/></div>
        <div className='absolute right-1 bottom-11 md:bottom-18'><img src={logo} className='h-10 md:h-14'/></div>
      </div>

      <hr className='text-gray-400'/>

      <div className='p-4 md:py-4 flex mt-2 flex-col md:flex-row justify-between items-center text-gray-500 gap-2'>
        <span className='text-[.75rem] xl:text-sm'>Via delta California 23, 2026</span>
        <div className='flex text-sm gap-2 md:gap-4 xl:text-sm'>
          <div className='hover:-translate-y-1 transition-all duration-200 cursor-pointer'><i class="ri-twitter-x-line"></i></div>
          <div className='hover:-translate-y-1 transition-all duration-200 cursor-pointer'><i class="ri-linkedin-fill"></i></div>
          <div className='hover:-translate-y-1 transition-all duration-200 cursor-pointer'><i class="ri-instagram-line"></i></div>
        </div>
        <div className='text-[.75rem] flex gap-4 xl:text-sm'>
          <span>Privacy and Cookie Policy</span>
          <span>Astratto © 2026</span>
        </div>
      </div>
    </div>
  )
}

export default Footer