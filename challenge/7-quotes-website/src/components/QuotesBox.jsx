import React from "react";

const QuotesBox = (props) => {
  return (
    <div className="flex flex-col gap-2 overflow-hidden rounded-xl border-2">
      <div className="flex items-center justify-between border-b border-red-600 bg-[#244f33] px-4 py-1">
        <div>
          <i class="ri-fire-line text-2xl text-red-500"></i>
          <span className="font-serif text-2xl font-light text-[#8DD7E4]">
            Quote
          </span>
        </div>
        <button
          onClick={() => {
            props.deleteHandler(props.idx);
          }}
        >
          <i class="ri-delete-bin-6-line text-2xl text-red-500"></i>
        </button>
      </div>
      <h3 className="px-4 font-mono text-2xl">"{props.elem.name}"</h3>
      <div className="flex items-center justify-end px-4 pb-2">
        <i class="ri-subtract-fill text-2xl"></i>
        <h6 className="font-mono text-xl">{props.elem.quote}</h6>
      </div>
    </div>
  );
};

export default QuotesBox;
