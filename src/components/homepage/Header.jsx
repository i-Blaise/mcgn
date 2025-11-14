import Navbar from "../Navbar"; 
import DonateForm from "../Modals/DonateForm";import React, { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <header className="bg-[url('/images/home-header.png')] bg-cover md:bg-center lg:bg-center bg-[82%_30%] h-screen flex flex-col items-center justify-center text-white mt-[-78px] top-0">
            <div className="text-center flex flex-col gap-2 lg:w-[80%] md:w-[90%] w-[95%] justify-center items-center">
                <h5 className="font-montserrat font-semibold capitalize text-[20px]">give hope for homeless</h5>
                <h1 className="lg:text-[72px] md:text-[52px] text-[32px] font-montserrat font-bold capitalize leading-20">Empowering Rural Communities through Cheerful Giving.</h1>
                <p className="text-[18px] text-[#EEEEEE] font-montserrat font-normal lg:w-[80%]">Together, we’re building brighter futures in Ghana — one project, one smile, and one act of kindness at a time. Your support fuels life-changing programs in education, health, and sustainable community development.</p>

                <div className="flex gap-6 mt-10">
                    <button
                    onClick={() => setIsOpen(true)}>
                        <span className="bg-[#BB7E1C] px-8 py-4 text-white font-montserrat font-medium text-[16px] hover:bg-[#e55a2c] transition duration-300 cursor-pointer">Donate Now</span>
                    </button>

                    <button>
                        <span className="border-[#BB7E1C] bg-transparent border-1 px-8 py-4 text-white font-montserrat font-medium text-[16px] hover:bg-[#e55a2c] transition duration-300 cursor-pointer">Get Involved</span>
                    </button>
                </div>

            </div>
            {isOpen && <DonateForm onClose={() => setIsOpen(false)} />}
        </header>
        </>
    );
}