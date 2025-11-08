import StatCard from "../Cards/StatCard"
import Stat1 from '../../assets/images/stat1.png';
import Stat2 from '../../assets/images/stat2.png';
import Stat3 from '../../assets/images/stat3.png';
import Stat4 from '../../assets/images/stat4.png';


export default function StatsRow() {
    return (
        <section className='flex flex-col mx-4 px-8 lg:mx-30 lg:px-0 my-20 gap-10'>
            <div className='flex items-center gap-2'>
                <h5 className='font-montserrat font-semibold text-[18px] text-[#252A34]'>
                    Our Cheerful Numbers
                </h5>
                <div className='border-b border-gray-400 h-0 w-14'></div>
            </div>
            <h2 className='font-montserrat font-semibold text-5xl text-[#252A34] w-[40%]'>
                The Cheerful Impact We’re Making
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <StatCard 
                    statImage={Stat1}
                    statNumber="20+"
                    statDescription="Communities Reached"
                />
                <StatCard 
                    statImage={Stat2}
                    statNumber="3,500+"
                    statDescription="Children educated"
                />
                <StatCard 
                    statImage={Stat3}
                    statNumber="₵1,000+"
                    statDescription="Donated"
                />
                <StatCard 
                    statImage={Stat4}
                    statNumber="2,000+"
                    statDescription="Health consultations"
                />
            </div>
        </section>
    )
}