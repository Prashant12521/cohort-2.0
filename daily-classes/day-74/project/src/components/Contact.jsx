import React from 'react'

const Contact = (props) => {
  return (
            <div
              className="flex justify-between items-center px-6 py-3 border-2 border-blue-600 rounded-2xl mb-4"
            >
              <div className="flex items-center gap-4">
                <i class="ri-user-3-fill px-2 py-1 rounded-[50%] text-xl bg-amber-50"></i>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {props.elem.name}
                  </h3>
                  <span className="text-white">{props.elem.phone}</span>
                </div>
              </div>

              <div className="text-white text-2xl flex gap-4">
                <i class="ri-phone-fill"></i>
                <button
                  onClick={() => {
                    props.deleteHandler(props.idx);
                  }}
                  className="cursor-pointer"
                >
                  <i class="ri-delete-bin-fill text-red-500"></i>
                </button>
              </div>
            </div>
          );
}

export default Contact