// import Gallery1 from '../../assets/gallery/gallery1.png';

// export default function GalleryImages() {
//     return (
//         <section className="flex flex-col mx-4 px-8 lg:mx-30 lg:px-0 my-20 gap-4 mt-30">
//             <div className='flex items-center gap-2'>
//                 <h5 className='font-montserrat font-semibold text-[18px] text-[#252A34] capitalize'>
//                     Explore Our Visual Stories
//                 </h5>
//                 <div className='border-b border-gray-400 h-0 w-14'></div>
//             </div>
//             <h1 className="font-montserrat font-semibold text-4xl">
//                 Gallery Images & Videos
//             </h1>
            

//             <div className='flex flex-col gap-2'>
//                 <div className='flex flex-col md:flex-row gap-2'>
//                     <div className='w-full md:w-2/3 rounded-xl h-[352px] overflow-hidden'>
//                         <img 
//                             src={Gallery1} 
//                             alt="Gallery Image 1"
//                             className="object-cover object-center w-full h-full"
//                         />
//                     </div>
//                     <div className='w-full md:w-1/3 rounded-xl h-[352px] overflow-hidden'>
//                         <img 
//                             src={Gallery1} 
//                             alt="Gallery Image 1"
//                             className="object-cover object-center w-full h-full"
//                         />
//                     </div>
//                 </div>
//                 <div className='flex flex-col md:flex-row gap-2'>
//                     <div className='w-full md:w-1/3 rounded-xl h-[352px] overflow-hidden'>
//                         <img 
//                             src={Gallery1} 
//                             alt="Gallery Image 1"
//                             className="object-cover object-center w-full h-full"
//                         />
//                     </div>
//                     <div className='w-full md:w-1/3 rounded-xl h-[352px] overflow-hidden'>
//                         <img 
//                             src={Gallery1} 
//                             alt="Gallery Image 1"
//                             className="object-cover object-center w-full h-full"
//                         />
//                     </div>
//                     <div className='w-full md:w-1/3 rounded-xl h-[352px] overflow-hidden'>
//                         <img 
//                             src={Gallery1} 
//                             alt="Gallery Image 1"
//                             className="object-cover object-center w-full h-full"
//                         />
//                     </div>
//                 </div>
//                 <div className='flex flex-col md:flex-row gap-2'>
//                     <div className='w-full md:w-1/3 rounded-xl h-[352px] overflow-hidden'>
//                         <img 
//                             src={Gallery1} 
//                             alt="Gallery Image 1"
//                             className="object-cover object-center w-full h-full"
//                         />
//                     </div>
//                     <div className='w-full md:w-2/3 rounded-xl h-[352px] overflow-hidden'>
//                         <img 
//                             src={Gallery1} 
//                             alt="Gallery Image 1"
//                             className="object-cover object-center w-full h-full"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }




import { useParams } from "react-router-dom";
import { galleryData } from "../data/galleryData";

export default function GalleryImages() {
    const { id } = useParams();
    const images = galleryData[id] || [];

    return (
        <section className="flex flex-col mx-4 px-8 lg:mx-30 lg:px-0 my-20 gap-4">
            
            <h1 className="font-montserrat font-semibold text-4xl">
                Gallery Images & Videos
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                {images.map((img, index) => (
                    <div key={index} className="rounded-xl h-[352px] overflow-hidden">
                        <img
                            src={img}
                            className="w-full h-full object-cover object-center"
                            alt="gallery"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
