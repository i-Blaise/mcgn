import Logo1 from '../assets/images/logo1.png';
import Logo2 from '../assets/images/logo2.png';
import Logo3 from '../assets/images/logo3.png';
import Logo4 from '../assets/images/logo4.png';

export default function PartnerLogos() {
    return (
        <section className='lg:mx-30 md:mx-12 my-20'>
            <div className="flex justify-between items-center gap-8 w-full flex-wrap md:flex-nowrap">
                <img src={Logo1} alt="Partner Logo 1" className="h-16 md:h-16 lg:h-18 xl:h-24 object-contain" />
                <img src={Logo2} alt="Partner Logo 2" className="h-16 md:h-16 lg:h-18 xl:h-24 object-contain" />
                <img src={Logo3} alt="Partner Logo 3" className="h-16 md:h-16 lg:h-18 xl:h-24 object-contain" />
                <img src={Logo4} alt="Partner Logo 4" className="h-16 md:h-16 lg:h-18 xl:h-24 object-contain" />
            </div>
        </section>
    )
}