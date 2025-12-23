import React from 'react'

const Card = () => {

  const name = 'Prashant';
  const age = 23;
  const arr = [12,23,34,45,56,67,78,89,90]

  return (
    <div>
      <h1 className='text-3xl'>{name}</h1>
      <h2>{age}</h2>
      <div className='flex gap-2'>{arr.map((e)=>{
        return <h5>{e}</h5>
      })}</div>
      <div>{arr.filter((e)=>{
        return e>50
      })}</div>
    </div>
  )
}

export default Card