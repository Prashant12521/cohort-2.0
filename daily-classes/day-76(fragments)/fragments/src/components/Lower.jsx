import React from 'react'

const Lower = (props) => {
  return (
    <div>
      <h2 className='font-mono text-4xl text-black p-2'>{props.name}</h2>
      <h3 className='font-serif text-2xl text-blue-800'>{props.role}</h3>
    </div>
  )
}

export default Lower