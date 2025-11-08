import TestimonialSliders from './Carousel/TestimonialSlider.jsx';
import TestimonialBgPattern from '../assets/images/testimonial-bg-pattern.svg';

export default function Testimonials() {
    return (
        <section className="bg-[#BB7E1C] relative flex flex-col justify-center items-center gap-2 py-20 overflow-hidden">
            <div className='flex items-center gap-2'>
                <div className='border-b border-[#ffffff80] h-0 w-14'></div>
                <h5 className='font-montserrat font-semibold text-[18px] text-[#FFFFFF] capitalize'>
                    our Testimonials
                </h5>
                <div className='border-b border-[#ffffff80] h-0 w-14'></div>
            </div>
            <h2 className='font-montserrat font-semibold text-4xl text-center text-[#FFFFFF] w-full lg:w-2/3'>Voices of Cheerful Givers</h2>

            <TestimonialSliders />

            <img src={TestimonialBgPattern} alt="Testimonial Background Pattern"  className='absolute right-0 bottom-0 pointer-events-none select-none'/>
        </section>
    )
}