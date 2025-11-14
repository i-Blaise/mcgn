// import { motion } from "framer-motion";
// import { CgCloseO } from "react-icons/cg";
// import React, { useEffect } from "react";

// export default function DonateForm({ onClose }) {
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("Form submitted!");
//         onClose();
//     };

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-999">
//             <div className="bg-[#FEF6E9] shadow-lg w-full-- max-w-md-- lg:w-[966px] md:w-[700px] p-12 overflow-y-auto relative h-[90vh] mx-2">
//                 <div className="flex justify-between items-center border-b-1 border-[#00000056] py-3">
//                     <h2 className="text-xl font-semibold text-gray-800">Your Donation</h2>

//                     <button
//                     onClick={onClose}
//                     className=" text-gray-500 hover:text-gray-900 cursor-pointer"
//                     >
//                     <CgCloseO className="size-5.5" />
//                     </button>
//                 </div>

//                 <form onSubmit={handleSubmit} className="flex flex-col gap-8">
//                     <div className="flex flex-col mt-6">
//                         <div className="flex flex-col lg:flex-row">
//                             <div className="flex">
//                                 <div className="bg-[#BB7E1C] text-white flex justify-center items-center w-1/16 px-8">
//                                     <p>GHC</p>
//                                 </div>
//                                 <input
//                                 type="text"
//                                 className="w-[352px] h-[64px] bg-white p-2 focus:border-1 focus:border-[#BB7E1C] focus:ring-0 outline-none"
//                                 required
//                                 />    
//                             </div>    
//                             <button className='h-[64px] !w-[223px] bg-[#BB7E1C] hover:bg-[#e55a2c] transition duration-300 cursor-pointer lg:ml-6 mt-6 lg:mt-0'>
//                                 <span className=" text-white font-montserrat font-normal text-[16px]">Custom Amount</span>
//                             </button>
//                         </div>
//                         <div className="grid grid-cols-3 md:grid-cols-5 mt-8 gap-x-5 gap-y-1 max-w-4xl mx-auto">
//                             <button className='!h-[44px] !w-[91px] bg-white border-1 border-[#BB7E1C] text-[#BB7E1C]  hover:text-white hover:bg-[#BB7E1C] transition duration-300 cursor-pointer'>
//                                 <span className="font-montserrat font-normal text-[16px]">25.00</span>
//                             </button>
//                             <button className='!h-[44px] !w-[91px] bg-white border-1 border-[#BB7E1C] text-[#BB7E1C]  hover:text-white hover:bg-[#BB7E1C] transition duration-300 cursor-pointer'>
//                                 <span className="font-montserrat font-normal text-[16px]">50.00</span>
//                             </button>
//                             <button className='!h-[44px] !w-[91px] bg-white border-1 border-[#BB7E1C] text-[#BB7E1C]  hover:text-white hover:bg-[#BB7E1C] transition duration-300 cursor-pointer'>
//                                 <span className="font-montserrat font-normal text-[16px]">100.00</span>
//                             </button>
//                             <button className='!h-[44px] !w-[91px] bg-white border-1 border-[#BB7E1C] text-[#BB7E1C]  hover:text-white hover:bg-[#BB7E1C] transition duration-300 cursor-pointer'>
//                                 <span className="font-montserrat font-normal text-[16px]">250.00</span>
//                             </button>
//                             <button className='!h-[44px] !w-[91px] bg-white border-1 border-[#BB7E1C] text-[#BB7E1C]  hover:text-white hover:bg-[#BB7E1C] transition duration-300 cursor-pointer'>
//                                 <span className="font-montserrat font-normal text-[16px]">500.00</span>
//                             </button>
//                         </div>
//                     </div>

//                     <div className="flex flex-col gap-6">
//                         <div className="flex justify-start items-center border-b-1 border-[#00000056] py-3">
//                             <h2 className="text-xl font-semibold text-gray-800">Personal Info</h2>
//                         </div>
//                         <div className="flex flex-col gap-6">
//                             <div className="flex flex-col md:flex-row gap-6">
//                                 <input
//                                 type="text"
//                                 className="w-[431px]-- w-full md:w-1/2 h-[64px] bg-white p-2 border-1 border-[#00000036] focus:border-1 focus:border-[#BB7E1C] focus:ring-0 outline-none text-[#666666] text-[14px]"
//                                 placeholder="First Name"
//                                 required
//                                 />
//                                 <input
//                                 type="text"
//                                 className="w-[431px]-- w-full md:w-1/2 h-[64px] bg-white p-2 border-1 border-[#00000036] focus:border-1 focus:border-[#BB7E1C] focus:ring-0 outline-none text-[#666666] text-[14px]"
//                                 placeholder="Last Name"
//                                 required
//                                 />
//                             </div>
//                             <div>
//                                 <input
//                                 type="text"
//                                 className="w-[431px]-- w-full h-[64px] bg-white p-2 border-1 border-[#00000036] focus:border-1 focus:border-[#BB7E1C] focus:ring-0 outline-none text-[#666666] text-[14px]"
//                                 placeholder="Your Email"
//                                 required
//                                 />
//                             </div>
//                             <div>
//                                 <textarea
//                                 type="text"
//                                 className="w-[431px]-- w-full h-[180px] bg-white p-2 border-1 border-[#00000036] focus:border-1 focus:border-[#BB7E1C] focus:ring-0 outline-none text-[#666666] text-[14px]"
//                                 placeholder="Your Email"
//                                 required
//                                 />
//                             </div>

//                             <div className="flex gap-4">
//                             <input type="checkbox"
//                             className="scale-145 accent-blue-600 cursor-pointer"
//                             />
//                             <p>
//                                 Agree to terms?
//                             </p>
//                             </div>

//                         </div>
//                     </div>

//                     <button className='h-[64px] !w-full bg-[#BB7E1C] hover:bg-[#e55a2c] transition duration-300 cursor-pointer'>
//                         <span className=" text-white font-montserrat font-normal text-[16px]">Donate Now</span>
//                     </button>

//                 </form>
//             </div>
//         </div>
//     )
// }







import React from "react";
import ReactDOM from "react-dom";
import { CgCloseO } from "react-icons/cg";

export default function DonateForm({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    onClose();
  };

  // Render the modal in a portal to the root of the DOM
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-[9999] overflow-y-auto h-full--">
      <div className="bg-[#FEF6E9] shadow-lg w-full max-w-[966px] md:w-[700px] p-12 relative h-[90vh] mx-4 overflow-y-auto rounded-lg">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b border-[#00000056] py-3">
          <h2 className="text-xl font-semibold text-gray-800">Your Donation</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 cursor-pointer"
          >
            <CgCloseO className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 mt-6">

          {/* Donation Amount */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex">
              <div className="bg-[#BB7E1C] text-white flex justify-center items-center px-4">
                <p>GHC</p>
              </div>
              <input
                type="text"
                className="w-[352px] h-[64px] bg-white p-2 focus:border-2 focus:border-[#BB7E1C] focus:ring-0 outline-none"
                placeholder="Custom Amount"
                required
              />
            </div>
            <button className="h-[64px] w-[223px] bg-[#BB7E1C] hover:bg-[#e55a2c] transition duration-300 cursor-pointer lg:mt-0 mt-4">
              <span className="text-white font-montserrat font-normal text-[16px]">
                Custom Amount
              </span>
            </button>
          </div>

          {/* Predefined Amount Buttons */}
          <div className="grid grid-cols-3 md:grid-cols-5 mt-8 gap-x-5 gap-y-2 max-w-4xl mx-auto">
            {["25.00", "50.00", "100.00", "250.00", "500.00"].map((amt) => (
              <button
                key={amt}
                type="button"
                className="h-[44px] w-[91px] bg-white border border-[#BB7E1C] text-[#BB7E1C] hover:bg-[#BB7E1C] hover:text-white transition duration-300 cursor-pointer"
              >
                <span className="font-montserrat font-normal text-[16px]">{amt}</span>
              </button>
            ))}
          </div>

          {/* Personal Info */}
          <div className="flex flex-col gap-6">
            <div className="flex justify-start items-center border-b border-[#00000056] py-3">
              <h2 className="text-xl font-semibold text-gray-800">Personal Info</h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="text"
                  className="w-full md:w-1/2 h-[64px] bg-white p-2 border border-[#00000036] focus:border-2 focus:border-[#BB7E1C] focus:ring-0 outline-none text-[#666666] text-[14px]"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  className="w-full md:w-1/2 h-[64px] bg-white p-2 border border-[#00000036] focus:border-2 focus:border-[#BB7E1C] focus:ring-0 outline-none text-[#666666] text-[14px]"
                  placeholder="Last Name"
                  required
                />
              </div>

              <input
                type="email"
                className="w-full h-[64px] bg-white p-2 border border-[#00000036] focus:border-2 focus:border-[#BB7E1C] focus:ring-0 outline-none text-[#666666] text-[14px]"
                placeholder="Your Email"
                required
              />

              <textarea
                className="w-full h-[180px] bg-white p-2 border border-[#00000036] focus:border-2 focus:border-[#BB7E1C] focus:ring-0 outline-none text-[#666666] text-[14px]"
                placeholder="Message"
                required
              />

              <div className="flex gap-4 items-center">
                <input type="checkbox" className="scale-125 accent-blue-600 cursor-pointer" />
                <p>Agree to terms?</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button className="h-[64px] w-full bg-[#BB7E1C] hover:bg-[#e55a2c] transition duration-300 cursor-pointer mt-4">
            <span className="text-white font-montserrat font-normal text-[16px]">Donate Now</span>
          </button>

        </form>
      </div>
    </div>,
    document.body // <-- portal target
  );
}
