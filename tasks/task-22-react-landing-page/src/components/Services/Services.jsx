import React from 'react'
import "./Services.css"

const Services = () => {
  return (
    <div className='services'>
      <div className="box firstt">
        <label htmlFor="Services">Services</label>

        <h3>Explore our full range of coaching. training, and tennis experiences. From first serve to match point - we've got the  right program for you.</h3>

        <button>Explore More<i class="ri-arrow-right-up-long-line"></i></button>
      </div>

      <div className="box second">
        <div className="program">Training Programs</div>
        <div className="bottom">
          <h5>Programs designed for <br />all ages and abilities</h5>
          <i class="ri-arrow-right-up-long-line"></i>
        </div>
      </div>

      <div className="box thirdd">
        <div className="top">
          <h6>Court Access</h6>
          <h5>Hourly Court Rental</h5>
        </div>

        <div className="bottom">
          <h6>Step into a space built for <br />players — to grow, compete, <br />and thrive.</h6>
          <div className="arrow">
            <i class="ri-arrow-left-long-line"></i>
            <i class="ri-arrow-right-long-line"></i>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services