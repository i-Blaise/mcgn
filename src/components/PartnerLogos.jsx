import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import tv3 from '../assets/images/tv3.png';
import MassiveWorkout from '../assets/images/massive-workout.png';
import Artfrica from '../assets/images/artfrica-studio.png';
import Stanbic from '../assets/images/stanbic.png';
import MassiveFarms from '../assets/images/farms.png';

// export default function PartnerLogos() {
//     return (
//         <section className='lg:mx-30 md:mx-12 my-2  mb-12 border-1 border-red-600'>
//             <div className="flex justify-between items-center gap-8 w-full flex-wrap md:flex-nowrap border-1 border-blue-600">
//                 <img src={tv3} alt="TV3" className="h-16 md:h-16 lg:h-18 xl:h-24 object-contain" />
//                 <img src={MassiveWorkout} alt="Massive Workout" className="h-16 md:h-16 lg:h-18 xl:h-24 object-contain" />
//                 <img src={Artfrica} alt="Artfrica Studio" className="h-16 md:h-16 lg:h-18 xl:h-24 object-contain" />
//                 <img src={Stanbic} alt="Stanbic Bank" className="h-16 md:h-16 lg:h-18 xl:h-24 object-contain" />
//                 <img src={MassiveFarms} alt="Partner Logo 4" className="h-16 md:h-16 lg:h-18 xl:h-24 object-contain" />
//             </div>
//         </section>
//     )
// }

export default function PartnerLogos() {
  const logos = [tv3, MassiveWorkout, Artfrica, Stanbic, MassiveFarms];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // makes it continuously slide
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="lg:mx-30 md:mx-12 my-2 mb-12">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center px-4">
            <img 
              src={logo} 
              alt={`Logo ${index}`} 
              className="h-16 md:h-16 lg:h-18 xl:h-24 object-contain"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}