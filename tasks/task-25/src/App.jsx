import React from 'react'
import Sidebar from './components/Sidebar'
import Searchbar from './components/Searchbar'
import Trending from './components/Trending'
import Continue from './components/Continue'

const App = () => {
  return (
    <div className='flex h-screen bg-black p-3 gap-4'>
      <Sidebar />

      <main className='flex-1 flex flex-col gap-3'>
        <Searchbar />
        <Trending />
        <Continue />
      </main>
    </div>
  )
}

export default App