import FooterLogo from '../assets/images/footer-logo.jpg';
import { FaXTwitter, FaInstagram , FaFacebookF, FaWhatsapp, FaYoutube     } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center bg-[#22262F] lg:px-28 lg:pt-18 w-full">
            {/* <div className='flex lg:flex-row flex-col px-12 md:px-38 lg:px-0 gap-8 justify-between pb-26 border-b-1 border-[#454545] w-full'> */}
            <div className="grid grid-cols-1 md:grid-cols-2-- md:grid-cols-[1fr_1fr] lg:grid-cols-5--- lg:grid-cols-[1fr_1fr_1fr_1fr_3fr] gap-2 pl-12 pt-12 pb-12 lg:pb-22 border-b-1 border-[#454545]">
            {/* --- Column 1 --- */}
            <div className="flex flex-col text-white justify-center items-start gap-6">
                <img
                src={FooterLogo}
                alt="Footer Logo"
                className="h-16 md:h-16 lg:h-18 xl:h-24 object-contain rounded-full"
                />
                <div>
                <h1 className="font-montserrat font-bold text-[28px]">10K</h1>
                <h4 className="font-montserrat font-bold text-[24px]">
                    Worldwide Client Already Connected
                </h4>
                </div>
            </div>

            {/* --- Column 2 --- */}
            <div className="flex flex-col text-white justify-start items-start gap-6 md:pl-18 lg:pl-0">
                <h4 className="font-semibold text-[18px] capitalize">Quick Links</h4>
                <ul className="gap-2 flex flex-col text-[#AFAFAF]">
                <li className="font-montserrat font-normal text-[16px] hover:text-white">
                    <a href="">Home</a>
                </li>
                <li className="font-montserrat font-normal text-[16px] hover:text-white">
                    <a href="">About Us</a>
                </li>
                <li className="font-montserrat font-normal text-[16px] hover:text-white">
                    <a href="">Projects</a>
                </li>
                <li className="font-montserrat font-normal text-[16px] hover:text-white">
                    <a href="">News & Media</a>
                </li>
                </ul>
            </div>

            {/* --- Column 3 --- */}
            <div className="flex flex-col text-white justify-start items-start gap-6 lg:pl-0 md:mt-8 lg:mt-0">
                <h4 className="font-semibold text-[18px] capitalize">Get in Touch</h4>
                <ul className="gap-2 flex flex-col text-[#AFAFAF]">
                <li className="font-montserrat font-normal text-[16px] hover:text-white">
                    <a href="">Contact us</a>
                </li>
                <li className="font-montserrat font-normal text-[16px] hover:text-white">
                    <a href="">Get Involved</a>
                </li>
                </ul>
            </div>

            {/* --- Column 4 --- */}
            <div className="flex flex-col text-white justify-start items-start gap-6 md:pl-18 lg:pl-0 md:mt-8 lg:mt-0">
                <h4 className="font-semibold text-[18px] capitalize">Address</h4>
                <ul className="gap-2 flex flex-col text-[#AFAFAF]">
                <li className="font-montserrat font-normal text-[16px] hover:text-white">
                    <a href="">📍 Accra, Ghana</a>
                </li>
                <li className="font-montserrat font-normal text-[16px] hover:text-white">
                    <a href="">📧 info@mcgn.org</a>
                </li>
                <li className="font-montserrat font-normal text-[16px] hover:text-white">
                    <a href="">📞 +233 55 123 4567</a>
                </li>
                </ul>
            </div>

            {/* --- Column 5 --- */}
            <div className="flex flex-col text-white justify-start items-start gap-6 md:col-span-2 lg:col-span-1 lg:pl-18 md:mt-8 lg:mt-0">
                <h4 className="font-semibold text-[18px] capitalize">Newsletter</h4>
                <div>
                <form action="">
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-4 text-[14px] bg-[#FFFFFF] text-black capitalize lg:w-[278px] lg:h-[48px] w-[200px] h-[40px]"
                    />
                    <button
                    type="submit"
                    className="p-2 bg-[#BB7E1C] text-white lg:w-[129px] lg:h-[48px] w-[100px] h-[40px] hover:bg-[#e55a2c] transition duration-300"
                    >
                    Subscribe
                    </button>
                </form>
                <p className="font-normal text-[14px] text-[#CCCCCC]">
                    Your email is safe with us, we don’t spam.
                </p>
                </div>

                <h4 className="font-semibold text-[18px] capitalize">Follow us</h4>
                <div className="flex gap-4">
                <div className="bg-[#FEF2DE] p-3 rounded-full cursor-pointer hover:bg-[#BB7E1C] hover:text-white transition duration-300">
                    <FaXTwitter className="text-black text-[18px]" />
                </div>
                <div className="bg-[#FEF2DE] p-3 rounded-full cursor-pointer hover:bg-[#BB7E1C] hover:text-white transition duration-300">
                    <FaInstagram className="text-black text-[18px]" />
                </div>
                <div className="bg-[#FEF2DE] p-3 rounded-full cursor-pointer hover:bg-[#BB7E1C] hover:text-white transition duration-300">
                    <FaFacebookF className="text-black text-[18px]" />
                </div>
                <div className="bg-[#FEF2DE] p-3 rounded-full cursor-pointer hover:bg-[#BB7E1C] hover:text-white transition duration-300">
                    <FaWhatsapp className="text-black text-[18px]" />
                </div>
                <div className="bg-[#FEF2DE] p-3 rounded-full cursor-pointer hover:bg-[#BB7E1C] hover:text-white transition duration-300">
                    <FaYoutube className="text-black text-[18px]" />
                </div>
                </div>
            </div>
            </div>


            <div className='py-8'>
                <p className='font-normal text-[14px] text-[#888888]'>© 2025 Massive Cheerful Giving Network. All rights reserved.</p>
            </div>
        </footer>
    );
}