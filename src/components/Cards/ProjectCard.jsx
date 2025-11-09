import CardImage from '../../assets/images/project-card1.png';
import OverlayImage from '../../assets/images/project-img-overlay.svg';

export default function ProjectCard() {
    return (
        <div className='flex flex-col gap-4 bg-white [box-shadow:0_10px_25px_rgba(37,42,52,0.08)] w-full border border-transparent transition-all duration-300 hover:border-[#BB7E1C] hover:[box-shadow:0_15px_35px_rgba(37,42,52,0.15)]'>
            <div className='relative w-full'>
                {/* Base image */}
                <img
                    src={CardImage}
                    alt="Project 1"
                    className="w-full h-full object-cover"
                />

                {/* Overlay image */}
                <img
                    src={OverlayImage}
                    alt="Overlay graphic"
                    className="absolute bottom-0 right-0 h-28 object-contain"
                />
            </div>
            <div className='px-6 pb-8 h-70 flex flex-col gap-4 justify-start items-start'>
                <div>
                    <h4 className='font-montserrat font-semibold text-[16px] text-[#BB7E1C]'>Medical</h4>
                    <h2 className='font-montserrat font-bold text-[24px] text-[#252A34] capitalize'>Clean Water for Volta Region</h2>
                </div>
                <p className='font-montserrat font-normal text-[14px] text-[#555555] capitalize'>Providing safe drinking water for over 1,200 residents and reducing preventable diseases.</p>
                <button className='mt-6'>
                    <span className="bg-transparent border-1 border[#BB7E1C] px-8 py-4 text-[#BB7E1C] font-montserrat font-medium text-[16px] hover:bg-[#BB7E1C] hover:text-white transition duration-300 cursor-pointer">Read More</span>
                </button>
            </div>
        </div>
    )
}