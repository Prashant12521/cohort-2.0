import React from 'react'

const Sidebar = () => {
  return (
    <aside className='min-w-fit px-4 bg-gray-800 text-white border rounded-md text-md border-amber-50'>
      <a href="#" className='flex items-center mb-2'>
        <img src="logo.png" className='h-12'/>
        <span className='text-lg font-semibold'>Drameeo</span>
      </a>

      <ul className='flex flex-col gap-4 mb-10'>
        <li><i class="ri-home-4-fill text-[#a37de1]"></i> Home</li>
        <li><i class="ri-compass-line text-[#a37de1]"></i> Explore</li>
        <li><i class="ri-stack-line text-[#a37de1]"></i> Genres</li>
        <li><i class="ri-bookmark-line text-[#a37de1]"></i> Favourites</li>
      </ul>

      <ul className='flex flex-col gap-4 mb-10'>
        <li><i class="ri-play-large-line text-[#a37de1]"></i> Continue Watching</li>
        <li><i class="ri-time-line text-[#a37de1]"></i> Recently Added</li>
        <li><i class="ri-folder-open-line text-[#a37de1]"></i> My Collection</li>
        <li><i class="ri-download-2-line text-[#a37de1]"></i> Download</li>
      </ul>

      <ul className='h-40 flex flex-col justify-between'>
        <li><i class="ri-settings-3-line"></i> Setting</li>
        <li><i class="ri-logout-box-r-line"></i> Logout</li>
      </ul>
    </aside>
  )
}

export default Sidebar