// import Logo from '../assets/images/nav-logo.png';
// import SearchIcon from '../assets/images/search-icon.svg';

// export default function Navbar() {
//     return (
//         <nav className="flex items-center justify-between bg-transparent px-46 py-3 z-10 absolute w-full border-1 border-red-500">
//             <div>
//                 <img src={Logo} alt="Logo" />
//             </div>
//             <ul className="flex space-x-8 p-4 text-white">
//                 <li>
//                     <a href="/" className="hover:underline">Home</a>
//                 </li>
//                 <li>
//                     <a href="/about" className="hover:underline">About</a>
//                 </li>
//                 <li>
//                     <a href="/about" className="hover:underline">Get Involved</a>
//                 </li>
//                 <li>
//                     <a href="/news" className="hover:underline">News</a>
//                 </li>
//                 <li>
//                     <a href="/about" className="hover:underline">Resources</a>
//                 </li>
//             </ul>
//             <div className='flex gap-2'>
//                 <button className="bg-[#BB7E1C] px-4 py-2 text-white font-montserrat font-medium text-[16px] hover:bg-[#e55a2c] transition duration-300 cursor-pointer">Contact Us</button>

//                 <button className="bg-transparent border-1 border-[#FFFFFF] px-3 py-2 text-white font-montserrat font-medium text-[16px] hover:bg-[#e55a2c] transition duration-300 cursor-pointer">
//                     <img src={SearchIcon} alt="Search" />
//                 </button>
//             </div>
//         </nav>
//     )
// }























import { useState } from "react";
import Logo from "../assets/images/nav-logo.png";
import SearchIcon from "../assets/images/search-icon.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative inset-x-0 lg:top-0 z-300 lg:bg-transparent bg-[#4d360bf3] rounded-3xl top-2 mx-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 text-white">
            <li><a href="/" className="hover:underline underline-offset-4">Home</a></li>
            <li><a href="/about" className="hover:underline underline-offset-4">About</a></li>
            <li><a href="/get-involved" className="hover:underline underline-offset-4">Get Involved</a></li>
            <li><a href="#" className="hover:underline underline-offset-4">News</a></li>
            <li><a href="#" className="hover:underline underline-offset-4">Resources</a></li>
          </ul>

          {/* Right: actions (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="bg-[#BB7E1C] px-4 py-2 text-white font-montserrat font-medium text-[16px] hover:opacity-90 transition"
            >
              Contact Us
            </button>
            <button
              className="flex items-center justify-center bg-transparent border border-white/70 rounded-md px-3 py-2 text-white hover:bg-white/10 transition"
              aria-label="Search"
            >
              <img src={SearchIcon} alt="" className="h-5 w-5" />
              <span className="sr-only">Open search</span>
            </button>
          </div>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white ring-1 ring-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg
              className={`h-6 w-6 ${open ? "hidden" : "block"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`h-6 w-6 ${open ? "block" : "hidden"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

{/* Mobile menu (animated overlay) */}
<div
  className={`md:hidden absolute left-0 right-0 top-full bg-[#4d360bf3] rounded-3xl mt-[4px] shadow-lg z-50 transform transition-all duration-300 ease-in-out ${
    open
      ? "opacity-100 translate-y-0 visible"
      : "opacity-0 -translate-y-4 invisible"
  }`}
>
  <div className="pb-4 pt-2 px-4">
    <ul className="flex flex-col gap-3 text-white">
      <li><a href="/" className="block rounded-md px-3 py-2 hover:bg-white/10">Home</a></li>
      <li><a href="/about" className="block rounded-md px-3 py-2 hover:bg-white/10">About</a></li>
      <li><a href="/get-involved" className="block rounded-md px-3 py-2 hover:bg-white/10">Get Involved</a></li>
      <li><a href="#" className="block rounded-md px-3 py-2 hover:bg-white/10">News</a></li>
      <li><a href="#" className="block rounded-md px-3 py-2 hover:bg-white/10">Resources</a></li>
    </ul>

    <div className="mt-4 flex items-center gap-3">
      <button className="flex-1 bg-[#BB7E1C] px-4 py-2 text-white font-montserrat font-medium text-[16px] rounded-md hover:opacity-90 transition">
        Contact Us
      </button>
      <button
        className="flex items-center justify-center bg-transparent border border-white/70 rounded-md px-3 py-2 text-white hover:bg-white/10 transition"
        aria-label="Search"
      >
        <img src={SearchIcon} alt="" className="h-5 w-5" />
        <span className="sr-only">Open search</span>
      </button>
    </div>
  </div>
</div>

      </div>

      {/* Optional hairline (replace/remove as needed) */}
      {/* <div className="border-t border-white/10" /> */}
    </nav>
  );
}
