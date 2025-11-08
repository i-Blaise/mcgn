import WWA_Image from '../../assets/images/wwa-image.png';

export default function WhoWeAre() {
    return (
        <section className='flex flex-col lg:flex-row mx-4 px-8 lg:mx-30 lg:px-0 my-20 gap-10'>
            <div className='w-full lg:w-1/2 items-center justify-center flex'>
                <img src={WWA_Image} alt="Who We Are" 
                className='lg:h-[40rem] w-fit object-cover'
                />
            </div>
            <div className='flex flex-col gap-4 w-full lg:w-1/2 justify-center items-start'>
                <div className='flex items-center gap-2'>
                    <h5 className='font-montserrat font-semibold text-[18px] text-[#252A34]'>
                        Who We Are”
                    </h5>
                    <div className='border-b border-gray-400 h-0 w-14'></div>
                </div>
                <h2 className='font-montserrat font-semibold text-4xl lg:w-[80%]'>Your Support is Really Powerful.</h2>
                <p className='font-montserrat font-normal text-[16px] text-[#444444]'>Massive Cheerful Giving Network (MCGN) is a non-profit organization empowering Ghana’s rural communities through compassion, collaboration, and sustainable development projects. We believe that real change begins when people come together to share what they have — cheerfully.</p>

                <button className='mt-6'>
                    <span className="bg-[#BB7E1C] px-8 py-4 text-white font-montserrat font-medium text-[16px] hover:bg-[#e55a2c] transition duration-300 cursor-pointer">Read More</span>
                </button>
            </div>
        </section>
    )
}