import React from "react";

const Continue = () => {
  return (
    <div className="text-amber-50 px-2 w-full">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-xl">Continue Watching</h3>
        <div className="text-sm px-3 py-1 font-semibold bg-[#836baab6] rounded-md">
          See All
        </div>
      </div>

      <div className="flex gap-2 flex-nowrap overflow-x-auto">
        <div className='h-60 w-100 bg-cover overflow-hidden relative bg-center rounded-xl bg-red-400 bg-[url("./show1.jpg")]'>
          <div className="absolute bottom-0 w-full flex flex-col gap-2 bg-[#0f0a1871]">
            <h4 className="text-xl font-semibold px-3">Breaking Bad</h4>
            <div className="flex justify-between px-5">
              <span className="border-amber-50">S2, E-5</span>
              <span>30min 55sec</span>
            </div>
            <div className="mx-3 h-1 w-full rounded-4xl bg-gray-800 overflow-hidden mb-2">
              <div className="w-[50%] h-full bg-[#5900e9]"></div>
            </div>
          </div>
        </div>
        <div className='h-60 w-100 bg-cover overflow-hidden relative bg-center rounded-xl bg-red-400 bg-[url("./show1.jpg")]'>
          <div className="absolute bottom-0 w-full flex flex-col gap-2 bg-[#0f0a1871]">
            <h4 className="text-xl font-semibold px-3">Breaking Bad</h4>
            <div className="flex justify-between px-5">
              <span className="border-amber-50">S2, E-5</span>
              <span>30min 55sec</span>
            </div>
            <div className="mx-3 h-1 w-full rounded-4xl bg-gray-800 overflow-hidden mb-2">
              <div className="w-[50%] h-full bg-[#5900e9]"></div>
            </div>
          </div>
        </div>
        <div className='h-60 w-100 bg-cover overflow-hidden relative bg-center rounded-xl bg-red-400 bg-[url("./show1.jpg")]'>
          <div className="absolute bottom-0 w-full flex flex-col gap-2 bg-[#0f0a1871]">
            <h4 className="text-xl font-semibold px-3">Breaking Bad</h4>
            <div className="flex justify-between px-5">
              <span className="border-amber-50">S2, E-5</span>
              <span>30min 55sec</span>
            </div>
            <div className="mx-3 h-1 w-full rounded-4xl bg-gray-800 overflow-hidden mb-2">
              <div className="w-[50%] h-full bg-[#5900e9]"></div>
            </div>
          </div>
        </div>
        <div className='h-60 w-100 bg-cover overflow-hidden relative bg-center rounded-xl bg-red-400 bg-[url("./show1.jpg")]'>
          <div className="absolute bottom-0 w-full flex flex-col gap-2 bg-[#0f0a1871]">
            <h4 className="text-xl font-semibold px-3">Breaking Bad</h4>
            <div className="flex justify-between px-5">
              <span className="border-amber-50">S2, E-5</span>
              <span>30min 55sec</span>
            </div>
            <div className="mx-3 h-1 w-full rounded-4xl bg-gray-800 overflow-hidden mb-2">
              <div className="w-[50%] h-full bg-[#5900e9]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Continue;
