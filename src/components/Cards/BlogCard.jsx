import Blog1 from '../../assets/images/blog1.jpeg';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';

export default function BlogCard() {
    return (
        <div className="bg-white rounded-lg flex flex-col gap-4 mt-6  [box-shadow:0_10px_30px_rgba(37,42,52,0.08)]">
            <div className="w-full overflow-hidden h-[290px] ">
                <img src={Blog1} alt="" className="w-full object-cover"/>
            </div>
            <div className='flex flex-col gap-4 pb-16 pt-6 px-8'>
                <div className='flex justify-between text-[#999999] text-[14px] font-normal'>
                    <div className='flex items-center gap-1'>
                        <FaUser className='text-[#999999]' />
                        <p>Author Name</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaCalendarAlt className='text-[#999999]' />
                        <p>August 15, 2023</p>
                    </div>
                </div>

                <div className='flex flex-col gap-4 justify-between items-start'>
                    <h3 className='text-[20px] font-bold font-montserrat text-[#252A34]'>Charity, Expectations vs. Reality</h3>
                    <p className='font-montserrat font-normal text-[14px] text-[#555555]'>
                        Over 1,200 residents now have access to safe drinking water thanks to MCGN’s recent borehole project. Learn how this initiative is transforming daily life for families in the region.
                    </p>
                    <button className='mt-6'>
                        <span className="border-1 border-[#BB7E1C] px-8 py-4 text-[#BB7E1C] font-montserrat font-medium text-[16px] hover:bg-[#BB7E1C] hover:text-white transition duration-300 cursor-pointer">Read More</span>
                    </button>
                </div>
            </div>
        </div>
    );
}