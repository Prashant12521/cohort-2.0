import React from "react";
import Img2 from '../assets/img/img2.png'
import Img3 from '../assets/img/img3.png'

const Section3 = () => {
  return (
    <section className="px-4 mt-4 h-screen">
      <h2 className="text-6xl font-light uppercase py-4">Our Advantages</h2>

      <div
        className="h-[90%] grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr] gap-3"
        style={{gridTemplateAreas: `"img2 text1""img2 text2""text3 img3""text4 img3"`,}}
      >

        <div className="rounded-md bg-cover bg-top" style={{ gridArea: "img2", backgroundImage: `url(${Img2})`}}></div>

        <div className="bg-[#1E1F1F] rounded-md p-4" style={{ gridArea: "text1" }}>

          <div className="flex justify-between items-end">
            <div className="w-[70%]">
              <h5 className="text-xl mb-2">INDEPENDENT DESIGNERS</h5>
              <p className="text-sm">Our platform celebrates the ingenuity of independent designers, offering a diverse mnge of fashion-forward garmonts that reflect the creativity and innovation of the artists behind them. Explore curted collections showcasing unique creations by independent designers.</p>
           </div>
          
            <div className='flex items-center gap-2 cursor-pointer'>
              <i className="ri-arrow-right-up-line text-2xl border px-1 border-white rounded-full bg-[#444444]"></i>
              <span className='uppercase'>Explore</span>
            </div>
          </div>

        </div>

        <div className="bg-[#1E1F1F] rounded-md p-4" style={{ gridArea: "text2" }}>
          <div className="flex justify-between items-end">
            <div className="w-[70%]">
              <h5 className="text-xl mb-2">EXCLUSIVE & UNIQUITY</h5>
              <p className="text-sm">Indulge in curated collections showcasing exclusive, one-of-a-kind pieces. each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality, curated for those who seck exclusivity.</p>
           </div>
          
            <div className='flex items-center gap-2 cursor-pointer'>
              <i className="ri-arrow-right-up-line text-2xl border px-1 border-white rounded-full bg-[#444444]"></i>
              <span className='uppercase'>Explore</span>
            </div>
          </div>
        </div>

        <div className="bg-[#1E1F1F] rounded-md p-4" style={{ gridArea: "text3" }}>
          <div className="flex justify-between items-end">
            <div className="w-[70%]">
              <h5 className="text-xl mb-2">HIGH QUALITY</h5>
              <p className="text-sm">Embrace superior craftsmanship with our meticulously curated. enduringly high-quality garments. Discover garments crafted with utmost attention to detail and finest materials. promising longevity and timeless style.</p>
           </div>
          
            <div className='flex items-center gap-2 cursor-pointer'>
              <i className="ri-arrow-right-up-line text-2xl border px-1 border-white rounded-full bg-[#444444]"></i>
              <span className='uppercase'>Explore</span>
            </div>
          </div>
        </div>

        <div className="rounded-md bg-cover bg-top" style={{ gridArea: "img3", backgroundImage: `url(${Img3})`}}></div>

        <div className="bg-[#1E1F1F] rounded-md p-4" style={{ gridArea: "text4" }}>
          <div className="flex justify-between items-end">
            <div className="w-[70%]">
              <h5 className="text-xl mb-2">ECO-FRIENDLY</h5>
              <p className="text-sm">Join our commitment to sustainability with eco-friendly fashion options, stylish yet mindful of our planet. Explore guilt-free shopping with our eco-consclous collections, crafted with planet-friendly materials and ethical practices.</p>
           </div>
          
            <div className='flex items-center gap-2 cursor-pointer'>
              <i className="ri-arrow-right-up-line text-2xl border px-1 border-white rounded-full bg-[#444444]"></i>
              <span className='uppercase'>Explore</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section3;
