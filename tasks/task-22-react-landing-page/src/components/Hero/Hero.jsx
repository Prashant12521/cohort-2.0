import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-content">
        <h1>Unleash Your Inner Champion Today.</h1>
        <h1>All In One Place.</h1>
        <p>Join the ultimate tennis experience - where passion meets performance,<br />and every swing brings you closer to victory.</p>
        <button>Start your own journey</button>
      </div>
      <div className="sm-link">
        <div className="left">
          <p>Train with real professionals. <br />Get the real results.</p>
          <div className="images">
            <img src="https://images.unsplash.com/photo-1583692331501-5339b76cbf1e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img src="https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>

        <div className="link">
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Tik Tok</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero