import React from "react";
import first from "../../assets/project/first.jpg";
import second from "../../assets/project/second.jpg";
import third from "../../assets/project/third.jpg";
import fourth from "../../assets/project/fourth.jpg";

const Projects = () => {
  return (
    <div className="my-5 mx-4 px-4 md:mt-10 py-2 md:pt-6">
      <div className="flex flex-col md:flex-row text-center md:justify-between md:items-center gap-2">
        <h6 className="text-xl md:text-3xl xl:text-4xl">Recent Projects</h6>
        <span className="text-[.75rem] md:text-sm text-gray-500">
          Step into the world of our most recent projects, a showcase <br />
          of our unwavering commitment to progressive design
        </span>
      </div>

      <div className="md:px-8 md:pt-4 md:flex md:justify-center gap-12">

        <div className="grow shrink basis-1">
          <div className="p-4">
            <div className="relative">
              <img
                src={first}
                className="h-60 w-full object-cover rounded-xl"
              />
              <div className="absolute right-4 top-4 text-xl px-3 py-2 bg-white rounded-full">
                <i class="ri-arrow-right-up-long-line"></i>
              </div>
              <div className="px-4 py-1 bg-white rounded-2xl absolute bottom-4 left-4">
                2D Animation
              </div>
            </div>
            <h5 className="text-xl pt-4 text-pink-600">The Lighthouse</h5>
            <span className="text-[.75rem] text-gray-400">
              Adding a new dimension to projects through thoughtfully design 2D
              animations
            </span>
          </div>

          <div className="p-4">
            <div className="relative">
              <img
                src={second}
                className="h-60 w-full object-cover rounded-xl"
              />
              <div className="absolute right-4 top-4 text-xl px-3 py-2 bg-white rounded-full">
                <i class="ri-arrow-right-up-long-line"></i>
              </div>
              <div className="px-4 py-1 bg-white rounded-2xl absolute bottom-4 left-4">
                Motion Graphics
              </div>
            </div>
            <h5 className="text-xl pt-4 text-pink-600">
              Navigating Possibilities
            </h5>
            <span className="text-[.75rem] text-gray-400">
              Motion graphics breather lite into the project, blending direction
              and creativity
            </span>
          </div>
        </div>

        <div className="md:py-12 grow shrink basis-1">
          <div className="px-4">
            <div className="relative">
              <img
                src={third}
                className="h-60 w-full object-cover rounded-xl"
              />
              <div className="absolute right-4 top-4 text-xl px-3 py-2 bg-white rounded-full">
                <i class="ri-arrow-right-up-long-line"></i>
              </div>
              <div className="px-4 py-1 bg-white rounded-2xl absolute bottom-4 left-4">
                Visual Identity
              </div>
            </div>
            <h5 className="text-xl pt-4 text-pink-600">Snowscape Haven</h5>
            <span className="text-[.75rem] text-gray-400">
              Crafting a visual identity that mirrors the serenity and allure of
              a winter sanctuary
            </span>
          </div>

          <div className="p-4">
            <div className="relative">
              <img
                src={fourth}
                className="h-60 w-full object-cover rounded-xl"
              />
              <div className="absolute right-4 top-4 text-xl px-3 py-2 bg-white rounded-full">
                <i class="ri-arrow-right-up-long-line"></i>
              </div>
              <div className="px-4 py-1 bg-white rounded-2xl absolute bottom-4 left-4">
                3D Animation
              </div>
            </div>
            <h5 className="text-xl pt-4 text-pink-600">Nocturnal Symphony</h5>
            <span className="text-[.75rem] text-gray-400">
              Through 3D artistry, we orchestrate an animated cde to the
              evening, a dance of shadows and dreams
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
