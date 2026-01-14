import React from "react";
import left from "../../assets/serviceImg/left.jpg";
import middle from "../../assets/serviceImg/middle.jpg";
import right from "../../assets/serviceImg/right.jpg";
import arrow from "../../assets/serviceImg/arrow.png"
import logo from "../../assets/serviceImg/logo.png"
import star from "../../assets/serviceImg/star.png"
import line from "../../assets/serviceImg/line.png"


const Services = () => {
  return (
    <div className="my-5 md:my-10 border border-gray-300 px-4 py-2 md:py-6 rounded-2xl">
      <div className="py-4 px-4 flex flex-col md:flex-row md:justify-between items-center">
        <h5 className="text-2xl md:text-3xl">Our Services</h5>
        <span className="text-[12px] md:text-sm text-gray-400">
          Discover a wide range of opportunities through <br />a comprehensive
          range of qualified services
        </span>
      </div>

      <div className="py-2 flex flex-col md:flex-row gap-4 px-4">
        <div className="border-2 border-purple-300 p-4 rounded-xl grow basis-1 flex flex-col justify-between">
          <div className="pb-2 flex justify-between items-center">
            <h5 className="text-xl md:text-2xl font-sans font-semibold">
              Motion <br />
              Graphic
            </h5>
            <div className="py-2 px-3 text-white text-xl rounded-full bg-purple-700">
              <i class="ri-arrow-right-up-long-line"></i>
            </div>
          </div>

          <hr className="text-purple-400" />

          <div className="py-2">
            <span className="text-[.9rem] text-gray-500 md:text-sm">
              Bring you ideas to life through dynamic visuals and engaging
              animations.
            </span>
          </div>
          <div>
            <img src={left} className="rounded-2xl h-40 w-full object-cover" />
          </div>
        </div>

        <div className="bg-purple-700 text-white p-4 rounded-xl grow basis-1 flex flex-col justify-between md:rounded-bl-full md:overflow-hidden">
          <div className="pb-2 flex justify-between items-center">
            <h5 className="text-xl md:text-2xl font-sans font-semibold">
              2D/3D <br />
              Animation
            </h5>
          </div>

          <hr className="text-purple-400" />

          <div className="py-2 text-center">
            <span className="text-[.9rem] text-gray-300 md:text-sm">
              Turn imagination into reality with our stunning 2D/3D animations.
            </span>
          </div>
          <div>
            <img
              src={middle}
              className="rounded-2xl h-40 w-full object-cover"
            />
          </div>
        </div>

        <div className="border-2 border-purple-300 p-4 rounded-xl grow basis-1 flex flex-col justify-between">
          <div className="pb-2 flex justify-between items-center">
            <h5 className="text-xl md:text-2xl font-sans font-semibold">
              Visual <br />
              Identity
            </h5>
            <div className="py-2 px-3 text-white text-xl rounded-full bg-purple-700">
              <i class="ri-arrow-right-up-long-line"></i>
            </div>
          </div>

          <hr className="text-purple-400" />

          <div className="py-2">
            <span className="text-[.8rem] text-gray-500 md:text-sm">
              Shape a unique brand persona through our comprehensive Visual
              identity solutions.
            </span>
          </div>
          <div>
            <img src={right} className="rounded-2xl h-40 w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="hidden md:flex justify-between items-center">
        <div className="flex gap-2">
          <div className="text-gray-400">
            <i class="ri-arrow-left-long-line"></i>
          </div>
          <i class="ri-arrow-right-long-fill"></i>
        </div>
        <div className="flex items-center">
          <div className="text-3xl">
            <i class="ri-subtract-line"></i>
          </div>
          <div className="text-gray-400">
            <i class="ri-subtract-line"></i>
            <i class="ri-subtract-line"></i>
            <i class="ri-subtract-line"></i>
            <i class="ri-subtract-line"></i>
            <i class="ri-subtract-line"></i>
            <i class="ri-subtract-line"></i>
          </div>
        </div>
      </div>

      <div className="py-6 md:py-8 relative">
        <div className="flex justify-center text-gray-400 text-[.75rem] md:text-sm mb-2">
          <div>
            <i class="ri-subtract-line"></i>
          </div>
          <span className="uppercase">About Astratto</span>
        </div>

        <div className="text-sm md:text-2xl lg:text-3xl xl:text-5xl text-center">
          <h2><span><img src={arrow} className="h-10 md:h-15 xl:h-18 inline"/></span>Our <span className="text-gray-400">visionary</span> <span className="text-red-500">artisans</span> collaborate <br /><span className="text-purple-700">seamlessly</span> to craft <span><img src={logo} className="h-6 md:h-10 xl:h-15 inline"/></span> inspiring <span className="text-gray-400">experiences,</span> <br /><span className="text-red-500">leaving</span> lasting <span className="text-gray-400">imprints</span> on <span className="text-purple-700">brands</span> <br />and spaces. <span><img src={star} className="h-10 md:h-15 xl:h-18 inline"/></span></h2>
        </div>

        <div className="absolute bottom-0 md:translate-y-10 left-8 md:left-40 xl:left-70 lg:translate-y-10 xl:translate-y-20"><img src={line} className="h-15 md:h-40 xl:h-60 rotate-10"/></div>

      </div>
    </div>
  );
};

export default Services;
