import React from 'react'
import Img1 from '../assets/img/img1.png'

const Section2 = () => {
  return (
    <section className='px-4 h-screen'>
      <div className="features w-full h-[30%] flex items-center gap-3">
        
        <div className='h-full w-[25%] bg-[#1E1F1F] rounded-md p-10 flex flex-col justify-between'>
          <h5 className='text-xl'>INDEPENDENCY</h5>

          <p className='text-sm'>Explore the creativity of independent designers from around the globe.</p>

          <div className='flex items-center gap-2 cursor-pointer w-fit'>
            <i className="ri-arrow-right-up-line text-2xl border px-1 border-white rounded-full bg-[#444444]"></i>
            <span className='uppercase'>Learn More</span>
          </div>
        </div>
        
        <div className='h-full w-[25%] bg-[#1E1F1F] rounded-md p-10 flex flex-col justify-between'>
          <h5 className='text-xl'>UNIQUITY</h5>

          <p className='text-sm'>Discover the charm of unique pieces that stand our effortlessly.</p>

          <div className='flex items-center gap-2 cursor-pointer w-fit'>
            <i className="ri-arrow-right-up-line text-2xl border px-1 border-white rounded-full bg-[#444444]"></i>
            <span className='uppercase'>Learn More</span>
          </div>
        </div>
        
        <div className='h-full w-[25%] bg-[#1E1F1F] rounded-md p-10 flex flex-col justify-between'>
          <h5 className='text-xl'>QUALITY</h5>

          <p className='text-sm'>Experience unparalleled <br />craftsmanship and attention to detail.</p>

          <div className='flex items-center gap-2 cursor-pointer w-fit'>
            <i className="ri-arrow-right-up-line text-2xl border px-1 border-white rounded-full bg-[#444444]"></i>
            <span className='uppercase'>Learn More</span>
          </div>
        </div>
        
        <div className='h-full w-[25%] bg-[#1E1F1F] rounded-md p-10 flex flex-col justify-between'>
          <h5 className='text-xl'>SUSTAINABILITY</h5>

          <p className='text-sm'>Embrace eco-conscious fashion choices without compromising on style.</p>

          <div className='flex items-center gap-2 cursor-pointer w-fit'>
            <i className="ri-arrow-right-up-line text-2xl border px-1 border-white rounded-full bg-[#444444]"></i>
            <span className='uppercase'>Learn More</span>
          </div>
        </div>
        
      </div>

      <div className='mt-4 p-8 w-full h-fit flex justify-between'>
        <div>
          <span className='uppercase font-light'>Designers</span>
          <h3 className='text-5xl font-light'>150+</h3>
        </div>
        <div>
          <span className='uppercase font-light'>Clients</span>
          <h3 className='text-5xl font-light'>500+</h3>
        </div>
        <div>
          <span className='uppercase font-light'>Masterpieces</span>
          <h3 className='text-5xl font-light'>20K+</h3>
        </div>
        <div>
          <span className='uppercase font-light'>Events</span>
          <h3 className='text-5xl font-light'>50+</h3>
        </div>
      </div>

      <div className='w-full h-[50%] flex gap-3'>

        <div className='w-[50%] h-full bg-[#1E1F1F] rounded-md p-10 flex flex-col justify-between'>
          <h6>ABOUT</h6>

          <h2 className='text-4xl'>WHERE FASHION MEETS <br />FREEDOM</h2>

          <div className='flex justify-between gap-8'>
            <p className='text-sm'>We believe that fashion should be <br />an expression of individuality. We encourage creativity and originality in every item we offer, presenting customers with exclusive collections from independent designers. With a commitment to fostering a community of creativity and innovation.</p>

            <p className='text-sm'>we strive to connect designers with fashion enthusiasts who appreciate the artistry and individuality behind each piece. Driven by our dedication to authenticity, we curate each collection with a keen eye for unique designs that inspire confidence and self-expression.</p>
          </div>
        </div>

        <div className='w-[50%] h-full bg-[#1E1F1F] rounded-md bg-cover bg-center' style={{ backgroundImage: `url(${Img1})`}}></div>
      </div>
    </section>
  )
}

export default Section2