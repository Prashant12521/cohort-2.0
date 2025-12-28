import React from "react";

const QuotesBox = (props) => {
  return (
    <div className="border-2 rounded-xl overflow-hidden flex flex-col gap-2">
      <div className="px-4 bg-[#244f33] flex items-center justify-between border-red-600 border-b py-1">
        <div>
          <i class="ri-fire-line text-2xl text-red-500"></i>
          <span className="text-2xl font-serif font-light text-[#8DD7E4]">
            Quote
          </span>
        </div>
        <button
          onClick={() => {
            props.deleteHandler(props.idx);
          }}
        >
          <i class="ri-delete-bin-6-line text-red-500 text-2xl"></i>
        </button>
      </div>
      <h3 className="text-2xl font-mono px-4">"{props.elem.name}"</h3>
      <div className="flex items-center justify-end px-4 pb-2">
        <i class="ri-subtract-fill text-2xl"></i>
        <h6 className="text-xl font-mono">{props.elem.quote}</h6>
      </div>
    </div>
  );
};

export default QuotesBox;
