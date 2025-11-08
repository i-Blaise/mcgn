import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Test1 from "../../assets/images/test1.jpeg";
import Test2 from "../../assets/images/test2.jpeg";
import Test3 from "../../assets/images/test3.jpeg";

// Custom Arrow Components
function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/3 md:top-1/2 -translate-y-1/2 bg-[#FFFFFF] hover:bg-[#6e4d2b] text-[#BB7E1C] p-3 rounded-full z-10 shadow-lg transition-all duration-300 hover:cursor-pointer"
      aria-label="Next"
    >
      <FaChevronRight className="w-5 h-5" />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/3 md:top-1/2 -translate-y-1/2 bg-[#FFFFFF] hover:bg-[#6e4d2b] text-[#BB7E1C] p-3 rounded-full z-10 shadow-lg transition-all duration-300 hover:cursor-pointer"
      aria-label="Previous"
    >
      <FaChevronLeft className="w-5 h-5" />
    </button>
  );
}

export default function TestimonialSliders() {
  const testimonials = [
    {
      id: 1,
      image: Test1,
      name: "Ama, Student",
      location: "Ho District",
      text: "Before MCGN’s clean water project, my friends and I walked long distances each morning just to fetch water. Now, we have safe water right in our village. We can attend school on time, and our parents no longer worry about waterborne diseases. It has truly changed our lives."
    },
    {
      id: 2,
      image: Test2,
      name: "Kwame, Farmer",
      location: "Savelugu",
      text: "MCGN’s irrigation support helped me grow crops all year round. My harvest has doubled, and I can now support my family without worry."
    },
    {
      id: 3,
      image: Test3,
      name: "Esi, Teacher",
      location: "Cape Coast",
      text: "The educational materials MCGN provided made learning exciting again. My students now come to class eager to learn!"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div className="mt-4">
        <ul className="!m-0 flex items-center justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => <button className="dot" aria-hidden />,
    // customPaging: (i) => (
    //   <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-[#BB7E1C] transition-all duration-300"></div>
    // ),
  };

  return (
    <div className="w-full pt-10 relative">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <Slider {...settings}>
          {testimonials.map((item) => (
            <div key={item.id}>
              <div className="flex flex-col gap-6 text-white items-center justify-center text-center w-full px-4">
                <div className="w-32 h-32 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-montserrat font-semibold text-[18px]">{item.name}</h3>
                  <p className="font-montserrat text-[16px] opacity-80">{item.location}</p>
                </div>

                <p className="font-montserrat text-[18px] md:text-[20px] leading-relaxed max-w-5xl">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
