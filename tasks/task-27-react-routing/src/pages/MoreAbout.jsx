import React from 'react'
import { useParams } from 'react-router-dom'

const MoreAbout = () => {
  const param = useParams()

  return (
    <div className="text-3xl py-30">About <span className="text-red-500 capitalize">{param.id}</span></div>
  )
}

export default MoreAbout