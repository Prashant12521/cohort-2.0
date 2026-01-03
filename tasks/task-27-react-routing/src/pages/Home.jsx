import React from "react";

const Home = () => {
  return (
    <div className="flex h-screen flex-col pt-28">
      <div className="text-center">
        <div className="mb-2">
          <h1 className="text-6xl">Hi, I'm Darwin -</h1>
          <h1 className="text-6xl">your new BDR colleague</h1>
        </div>
        <p className="text-gray-500">
          Darwin will continuously source leads, craft personalized
          <br />& persuasive messages that book meetings with buyers.
        </p>
      </div>
      <div className="flex items-center justify-center gap-3 py-4">
        <button className="cursor-pointer rounded-3xl bg-linear-to-r from-[#50628B] to-[#1F2C3F] px-4 py-2 text-white">
          Partner with Darwin
        </button>
        <div className="flex">
          <img
            className="h-8 w-8 rounded-full border border-white object-cover object-center"
            src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="-ml-3 h-8 w-8 rounded-full border border-white object-cover object-center"
            src="https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="-ml-4 h-8 w-8 rounded-full border border-white object-cover object-center"
            src="https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="-ml-3 h-8 w-8 rounded-full border border-white object-cover object-top"
            src="https://plus.unsplash.com/premium_photo-1727942416727-9f16462ef11b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="-ml-4 h-8 w-8 rounded-full border border-white object-cover object-top"
            src="https://plus.unsplash.com/premium_photo-1664875849294-2685759269b0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <span className="text-xs text-gray-500">+541 joined</span>
      </div>

      <img
        className="absolute bottom-0 left-[50%] h-120 -translate-x-1/2"
        src="/hero.png"
        alt=""
      />
    </div>
  );
};

export default Home;
