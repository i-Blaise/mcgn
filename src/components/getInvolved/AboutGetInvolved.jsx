import WelcomeImage from "../../assets/images/welcome-image.png"
import { GiBullseye } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";
import WelcomeBg from "../../assets/images/welcome-bg.svg"

export default function AboutGetInvolved() {
    return ( 
        <div className="w-full lg:h-150 md:h-250 h-250">
            
        <section className="flex flex-col lg:flex-row mx-4 lg:mx-46 lg:px-0 my-20 md:px-0 gap-10 relative z-100 justify-center items-center">
            <div className="flex flex-col gap-4 justify-center items-start lg:w-1/2 md:w-full md:px-10">
                <div className='flex items-center gap-2'>
                    <h5 className='font-montserrat font-semibold text-[18px] text-[#252A34] mr-2 capitalize'>
                        Welcome to MCGN
                    </h5>
                    <div className='border-b border-gray-400 h-0 w-14'></div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-[#252A34] font-semibold text-4xl">
                        Let Us Come Together To Make a Difference
                    </h2>
                    <p className="font-normal text-[#444444] text-[16px]">
                        Every contribution you make helps us bring hope, education, healthcare, and sustainable support to families and communities across Ghana’s rural areas. 
                        <br/>
                        <br/>
                        Your cheerful giving provides children with access to learning, ensures families have clean water and quality healthcare, and empowers individuals with the tools and opportunities to build better livelihoods.
                    </p>
                </div>
                <div className="bg-[#FEF2DE] px-4 text-[#BB7E1C] flex flex-col items-start gap-2 py-4">
                    <p className="text-[#555555] text-[14px] font-normal">
                        Together, we are not just meeting immediate needs — 
                        we’re nurturing long-term growth, restoring dignity, and 
                        creating a cycle of kindness that continues to uplift lives 
                        for generations to come.
                    </p>
                </div>
            </div>
            <div className="lg:w-1/2 md:w-full md:px-10">
                <img src={WelcomeImage} alt="Images of MCGN Volunteers and boat donations" />
            </div>
        </section>
            <img src={WelcomeBg} alt="" 
                className='relative lg:bottom-120 lg:left-165 md:bottom-90 md:left-0 bottom-90 left-0 pointer-events-none select-none lg:h-[500px] w-auto'
            />
        </div>
    );
}