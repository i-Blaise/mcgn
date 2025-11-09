export default function CTA() {
    return (
        <section className="flex flex-col mx-4 lg:mx-46 lg:px-0 my-20 md:px-0 gap-10 relative z-100 justify-between bg-[url('/images/cta.png')] bg-cover bg-no-repeat md:bg-center lg:bg-center h-[400px] items-start border-1 border-red-500">
            <div className="bg-[#252a348c] p-6 ml-12 mt-14 w-1/3 ">
                <p className="text-[#d8d7d7] font-semibold">
                    Together, we are not just meeting immediate needs — 
                    we’re nurturing long-term growth, restoring dignity, and 
                    creating a cycle of kindness that continues to uplift lives 
                    for generations to come.
                </p>
            </div>
            <div className="bg-[#252a348c] p-6 w-full flex gap-6">                
                <button className='!h-[48px] !w-[204px] bg-[#BB7E1C] hover:bg-[#e55a2c] transition duration-300 cursor-pointer'>
                    <span className=" text-white font-montserrat font-medium text-[16px]">Donate Now</span>
                </button>              
                <button className='!h-[48px] !w-[204px] bg-[#BB7E1C] hover:bg-[#e55a2c] transition duration-300 cursor-pointer'>
                    <span className=" text-white font-montserrat font-medium text-[16px]">Volunteer</span>
                </button>
            </div>
        </section>
    )
}