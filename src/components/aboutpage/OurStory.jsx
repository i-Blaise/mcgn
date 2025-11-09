import OurStoryImage from '../../assets/images/ourstory-image.png';
import OurStoryPattern from '../../assets/images/ourstory-pattern.svg';

export default function OurStory() {
    return (
        <div className='relative overflow-x-clip mt-[-140px] z-0'>
            <img src={OurStoryPattern} alt="" 
            className='relative top-0 left-0 pointer-events-none select-none h-[800px] w-auto'
            />
            <section className='flex flex-col lg:flex-row mx-4 lg:mx-46 lg:px-0 my-20 md:px-0 gap-10 relative z-100 mt-[-560px] justify-center items-center'>
                <div className='lg:w-1/2 md:w-full md:px-10'>
                    <img src={OurStoryImage} alt="Our Story Image of the group" 
                    className='lg:h-[36rem] w-fit object-cover' />
                </div>

                <div className="flex flex-col gap-4 justify-center items-start lg:w-1/2 md:w-full md:px-10">
                    <div className='flex items-center gap-2'>
                        <h5 className='font-montserrat font-semibold text-[18px] text-[#252A34] mr-2'>
                            Our Story
                        </h5>
                        <div className='border-b border-gray-400 h-0 w-14'></div>
                    </div>
                    <h2 className='font-semibold text-4xl'>
                        How It All Began
                    </h2>
                    <p className='text-[16px] font-normal text-[#444444] capitalize'>
                        Massive Cheerful Giving Network (MCGN) was founded with a simple but powerful belief — that giving should be cheerful, compassionate, and transformative.
                        <br /> <br />
                        What started as small acts of kindness in local communities has grown into a nationwide movement connecting volunteers, donors, and partners to empower those in need.
                        <br /> <br />
                        Today, MCGN leads community-driven projects in health, education, and livelihoods — helping families and individuals build stronger, happier, and more sustainable lives.
                    </p>
                </div>
            </section>
        </div>
    )
}