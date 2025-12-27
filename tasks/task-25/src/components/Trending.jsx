import React from "react";

const Trending = () => {
  return (
    <div className='w-[800px] h-100 p-4 flex flex-col justify-between border text-amber-50 border-amber-50 rounded-md bg-top bg-cover bg-[url("./hero.jpg")]'>
      <div className="px-3 py bg-[#8773a98b] rounded-3xl w-fit overflow-x-auto">
        <i class="ri-fire-fill text-red-400"></i>
        <span className="text-amber-50 font-light"> Now Trending</span>
      </div>

      <div className="flex flex-col gap-4 overflow-x-auto">
        <div className="flex items-center gap-2 font-light text-sm">
          <span className="px-3 py-1 bg-[#8773a973] rounded-3xl">
            Action
          </span>
          <span className="px-3 py-1 bg-[#8773a973] rounded-3xl">
            Sci-Fi
          </span>
        </div>
        <h1 className="text-3xl font-semibold">
          The Matrix Resurrections
        </h1>
        <p className="text-xs">
          When two curious kids stumble into a hidden portal, they travel <br />
          across magical dimensions while trying to find their way home.....
        </p>
      </div>

      <div className="flex items-center gap-4 overflow-x-auto">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#9B7FC9] rounded-xl text-black">
          <i class="ri-play-fill text-xl"></i>
          <span className="font-semibold">Watch Now</span>
        </div>
        <i class="ri-download-2-line px-3 py-1.5 bg-[#8773a973] rounded-xl"></i>
        <i class="ri-more-fill px-3 py-1.5 bg-[#8773a973] rounded-xl"></i>
      </div>
    </div>
  );
};

export default Trending;
