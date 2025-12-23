import React from 'react'
import GT3 from '../../public/img/GT3.png'

const Card = ({car}) => {
  

  return (
    <div className='h-85 w-65 rounded-3xl overflow-hidden border-8 border-solid border-white shadow-[0_24px_40px_10px_#1E1E1E] bg-[#cfcfcf]'>
      <div className='h-[50%] bg-cover bg-center' style={{ backgroundImage: `url(${car.img})` }}></div>
      <div className='h-[50%] flex flex-col justify-center gap-4 px-4'>
        <div className='text-[10px] flex gap-2'>
          <span className='px-1 py-[.2px] bg-white rounded-md'>{car.color}</span>
          <span className='px-1 py-[.2px] bg-white rounded-md'>{car.time}</span>
          <span className='px-1 py-[.2px] bg-white rounded-md'>{car.gear}</span>
        </div>
        
        <div className='text-2xl/6 font-bold w-[80%]'>{car.carName}</div>
        
        <p className='text-[8px]'>{car.smallInfo}</p>
      </div>
    </div>
  )
}

export default Card