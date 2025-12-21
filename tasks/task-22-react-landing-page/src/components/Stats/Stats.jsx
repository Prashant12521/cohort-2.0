import React from 'react'
import "./Stats.css"

const Stats = () => {
  return (
    <div className='stats'>
      <h5>A few more facts about us in numbers</h5>
      <div className="info">
        <div className="num-detail">
          <h6>12 000+</h6>
          <p>Hours of play annually</p>
        </div>
        <div className="num-detail">
          <h6>89%</h6>
          <p>Player Retention Rate</p>
        </div>
        <div className="num-detail">
          <h6>1,200+</h6>
          <p>Active Members</p>
        </div>
        <div className="num-detail">
          <h6>125+</h6>
          <p>Annual Tournaments</p>
        </div>
      </div>
    </div>
  )
}

export default Stats