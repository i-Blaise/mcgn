import WelcomeImage from "../../assets/images/welcome-image.png"
import { GiBullseye } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";
import WelcomeBg from "../../assets/images/welcome-bg.svg"
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutUs() {
    const fadeLeft1 = {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 1.0, ease: "easeOut", delay: 0.3 }
    };
    const fadeLeft2 = {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 1.0, ease: "easeOut", delay: 0.5 }
    };
    const fadeLeft3 = {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 1.0, ease: "easeOut", delay: 0.7 }
    };
    return ( 
        <div className="w-full h-200">
            
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
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo.
                    </p>
                </div>
                <div className="flex flex-col gap-6">
                    <motion.div {...fadeLeft1}>
                        <div className="bg-[#FEF2DE] px-4 text-[#BB7E1C] flex flex-col items-start gap-2 py-4">
                            <div className="flex justify-center items-center gap-2">
                                <GiBullseye className="text-3xl" />
                                <h4 className="font-bold text-[20px]">Our mission</h4>
                            </div>
                            <p className="text-[#555555] text-[14px] font-normal">
                                Empowering communities through health, education, 
                                and livelihood programs for lasting change.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div {...fadeLeft2}>
                        <div className="bg-[#FEF2DE] px-4 text-[#BB7E1C] flex flex-col items-start gap-2 py-4">
                            <div className="flex justify-center items-center gap-2">
                                <FaRegLightbulb className="text-3xl" />
                                <h4 className="font-bold text-[20px]">Our mission</h4>
                            </div>
                            <p className="text-[#555555] text-[14px] font-normal">
                                A Ghana where everyone can live with dignity, opportunity, and hope.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div {...fadeLeft3}>
                        <div className="bg-[#FEF2DE] px-4 text-[#BB7E1C] flex flex-col items-start gap-2 py-4">
                            <div className="flex justify-center items-center gap-2">
                                <IoDiamond className="text-3xl" />
                                <h4 className="font-bold text-[20px]">Our mission</h4>
                            </div>
                            <p className="text-[#555555] text-[14px] font-normal">
                                Empowering communities through health, education, 
                                and livelihood programs for lasting change.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="lg:w-1/2 md:w-full md:px-10">
                <img src={WelcomeImage} alt="Images of MCGN Volunteers and boat donations" />
            </div>
        </section>
            <img src={WelcomeBg} alt="" 
                className='relative lg:bottom-90 lg:left-165 md:bottom-90 md:left-0 bottom-90 left-0 pointer-events-none select-none lg:h-[500px] w-auto'
            />
        </div>
    );
}