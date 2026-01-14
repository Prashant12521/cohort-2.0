import React from 'react'
import orangeLogo from '../../assets/hero/logo-orange.png'
import left from '../../assets/hero/left.png'
import right from '../../assets/hero/right.png'
import line1 from '../../assets/hero/cursive-line.svg';
import line2 from '../../assets/hero/cursive-line2.png';

const Hero = () => {
  return (
    <div className='mx-2 pb-4 relative mb-4'>
      <div className='absolute -z-10 md:left-2 lg:left-8 -rotate-6'><img src={left} className='h-30 md:h-70 rounded-xl object-cover'/></div>
      <div className='text-center py-6 md:py-15'>
        <h6 className='text-[.5rem] md:text-sm lg:text-base pb-2 md:pb-4 text-gray-400'>Igniting the Spark of Inspiration</h6>
        <h1 className='text-2xl md:text-5xl lg:text-7xl leading-10 md:leading-16'>Unleash Your <br />Brand <img src={orangeLogo} className='h-8 md:h-12 inline'/> with Our <br /><span className='bg-yellow-200 text-purple-800 rounded-xl inline-block rotate-3'>Mágico</span> Design</h1>
      </div>

      <div className='absolute bottom-10 md:bottom-15 md:left-30 lg:left-70 lg:bottom-15 -rotate-20'><img src={line1} className='h-5 md:h-10 rotate-180'/></div>

      <div className='absolute right-0 lg:right-4 bottom-2 -z-10 rotate-6'><img src={right} className='h-30 md:h-60 rounded-xl object-cover'/></div>
      
      <div className='absolute right-35 md:right-65 bottom-2 md:bottom-2 rotate-12'><img src={line2} className='h-8 md:h-20'/></div>
    </div>
  )
}

export default Hero