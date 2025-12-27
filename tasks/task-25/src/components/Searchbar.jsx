import React from 'react'

const Searchbar = () => {
  return (
    <div className='h-12 flex items-center justify-between text-white'>
      <div className='p-2 bg-gray-800 rounded-md border border-amber-50'>
        <i class="ri-search-line mr-3"></i>
        <span className='font-mono'>Search for films, directors, or actors...</span>
      </div>
      <div className='flex items-center gap-4'>
        <i class="ri-notification-3-line"></i>
        <img src="./user.avif" className='h-7 w-8 rounded-[50%] bg-cover bg-center'/>
      </div>
    </div>
  )
}

export default Searchbar