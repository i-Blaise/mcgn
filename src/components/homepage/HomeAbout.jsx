import HomeAboutImage from '../../assets/images/home-about.png';
import MissionIcon from '../../assets/images/mission-icon.svg';
import VisionIcon from '../../assets/images/vision-icon.svg';

export default function HomeAbout() {
    return (
        <section className='flex flex-col lg:flex-row mx-4 px-8 lg:mx-30 lg:px-0 my-20 gap-10 mt-30'>
            <div className='flex flex-col gap-4 w-full lg:w-1/2 justify-center items-start lg:pl-8'>
                <div className='flex items-center gap-2'>
                    <h5 className='font-montserrat font-semibold text-[18px] text-[#252A34]'>
                        Welcome To MCGN
                    </h5>
                    <div className='border-b border-gray-400 h-0 w-14'></div>
                </div>
                <h2 className='font-montserrat font-semibold text-4xl lg:w-[60%]'>Let Us Come Together To Make a Difference</h2>
                <p className='font-montserrat font-normal text-[16px] text-[#444444] lg:w-[75%] capitalize'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.</p>

                <div className='flex flex-col lg:flex-row gap-4 w-full lg:w-[70%]'>
                    <div className='flex flex-col gap-4 bg-[#FEF2DE] py-4 px-4 w-[20rem]'>
                        <div className='flex gap-2'>
                            <img src={MissionIcon} alt="Our Mission" />
                            <h3 className='font-montserrat font-bold text-[#BB7E1C] text-[20px]'>Our Mission</h3>
                        </div>
                        <p className='capitalize text-[14px]'>Empowering communities through health, education, and livelihood programs </p>
                    </div>

                    <div className='flex flex-col gap-4 bg-[#FEF2DE] py-4 px-4 w-[20rem]'>
                        <div className='flex gap-2'>
                            <img src={VisionIcon} alt="Our Vision" />
                            <h3 className='font-montserrat font-bold text-[#BB7E1C] text-[20px]'>Our Vision</h3>
                        </div>
                        <p className='capitalize text-[14px]'>A Ghana where everyone can live with dignity, opportunity, and hope.</p>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/2 items-center justify-center '>
                <img src={HomeAboutImage} alt="About Us" 
                className='lg:h-[38rem] w-fit object-cover'
                />
            </div>

        </section>
    )
}