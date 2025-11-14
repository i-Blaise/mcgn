export default function Contact() {
    return (
        <section className='flex flex-col lg:flex-row mx-4 px-2 lg:mx-36 lg:px-0 my-20 gap-0'>
            <div className='flex flex-col gap-4 w-full lg:w-3/5 justify-center items-start'>
                <div className='flex items-center gap-2'>
                    <h5 className='font-montserrat font-semibold text-[18px] text-[#252A34]'>
                        Get In Touch
                    </h5>
                    <div className='border-b border-gray-400 h-0 w-14'></div>
                </div>
                <h2 className='font-montserrat font-semibold text-4xl lg:w-[80%]'>Send Us a Message</h2>

                <form action="/" className="flex flex-col w-full text-[16px] text-[#252A34] font-montserrat font-normal">
                    <div className="flex flex-col md:flex-row w-full gap-6">
                        <div className="flex flex-col gap-2 w-full md:w-1/2">
                            <label htmlFor="">Full Name <span className="text-red-600">*</span></label>
                            <input type="text"
                            className="h-[52px] bg-[#FEF2DE] p-2 border-1 border-[#D9D7D7] focus:border-2 focus:border-[#D9D7D7] focus:ring-0 outline-none"
                            placeholder="John Doe"
                            required />
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-1/2">
                            <label htmlFor="">Phone Number <span className="text-red-600">*</span></label>
                            <input type="tel"
                            className="h-[52px] bg-[#FEF2DE] p-2 border-1 border-[#D9D7D7] focus:border-2 focus:border-[#D9D7D7] focus:ring-0 outline-none"
                            placeholder="+233 123 456 789"
                            required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full gap-6 mt-6">
                        <div className="flex flex-col gap-2 w-full md:w-1/2">
                            <label htmlFor="">Your Email Address</label>
                            <input type="text"
                            className="h-[52px] bg-[#FEF2DE] p-2 border-1 border-[#D9D7D7] focus:border-2 focus:border-[#D9D7D7] focus:ring-0 outline-none"
                            placeholder="Email Address"
                            required />
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-1/2">
                            <label>Subject</label>
                            <select className="h-[52px] bg-[#FEF2DE] p-2 border border-[#D9D7D7] focus:border-2 focus:border-[#D9D7D7] focus:ring-0 outline-none"
                                required >
                                <option className="bg-white text-black" value="">Select a subject</option>
                                <option className="bg-white text-black" value="design">Design</option>
                                <option className="bg-white text-black" value="development">Development</option>
                                <option className="bg-white text-black" value="pricing">Pricing</option>
                                <option className="bg-white text-black" value="support">Support</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full mt-6 flex flex-col gap-2">
                            <label htmlFor="">Subject</label>
                        <textarea type="text"
                        className="h-[180px] w-full bg-[#FEF2DE] p-2 border-1 border-[#D9D7D7] focus:border-2 focus:border-[#D9D7D7] focus:ring-0 outline-none"
                        placeholder="Write your message here..."
                        />
                    </div>              
                    <button className='!h-[48px] !w-[204px] bg-[#BB7E1C] hover:bg-[#e55a2c] transition duration-300 cursor-pointer mt-12'>
                        <span className=" text-white font-montserrat font-medium text-[16px]">Submit Message</span>
                    </button>
                </form>
            </div>
            <div className="flex flex-col justify-center items-center lg:items-end md:w-full w-fit lg:w-2/5">
                <div className="flex flex-col justify-center items-start gap-4 bg-[#FEF2DE] h-fit md:w-[443px] px-8 py-6 mt-18">
                    <h2 className="text-[32px] font-semibold text-[#252A34]">
                        Address
                    </h2>
                    <p className="font-normal text-[14px] text-[#666666]">
                        Quam elementum pulvinar etiam non quam lacus
                        suspendisse.A scelerisque purus semper eget duis at
                        Lobortisscelerisque fermentum dui faucibus in ornare....
                    </p>
                    <p className="text-[16px]">
                        <span className="font-semibold text-black">Location: </span>
                        Spintex Road, Accra, Ghana
                    </p>
                    <p className="text-[16px]">
                        <span className="font-semibold text-black">Phone: </span>
                        +233 54 608 5803 | +233 54 5296150
                    </p>
                    <p className="text-[16px]">
                        <span className="font-semibold text-black">Email: </span>
                        info@massivecheerfulgiving.org
                    </p>
                    <p className="text-[16px]">
                        <span className="font-semibold text-black">Office Hours: </span>
                        Monday - Friday, 8:30 AM - 5:00 PM
                    </p>
                </div>
            </div>

        </section>
    )
}