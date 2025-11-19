import Gallery1 from '../../assets/gallery/gallery1.png';

// export default function GalleryCard() {
//     return (
//         <div className='flex flex-col shadow-[0px_15px_30px_rgba(37,42,52,0.12)] hover:shadow-[0px_15px_30px_rgba(37,42,52,0.22)] transition-shadow duration-300'>
//             <div className='relative h-80 w-full group overflow-hidden'>
//                 <img 
//                     src={Gallery1} 
//                     alt="Gallery Image 1"
//                     className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black/40 opacity-100 lg:opacity-0 group-hover:opacity-100  flex items-center justify-center transition-opacity duration-300">
//                     <a href="/gallery-open" className='no-underline !cursor-pointer'>
//                         <button className="px-6 py-2 text-black font-semibold text-sm rounded-md shadow-md bg-[#BB7E1C] hover:text-white transition duration-300">
//                         View All Images
//                         </button>
//                     </a>
//                 </div>
//             </div>
//             <div className='px-6 py-10'>
//                 <h3 className='font-montserrat font-semibold text-[20px] text-[#252A34] mt-4'>
//                     Volunteers distributing learning materials to rural schools.
//                 </h3>
//             </div>
//         </div>
//     )
// }


export default function GalleryCard({ id, image, title }) {
    return (
        <div className='flex flex-col shadow-[0px_15px_30px_rgba(37,42,52,0.12)]
                     hover:shadow-[0px_15px_30px_rgba(37,42,52,0.22)]
                     transition-shadow duration-300'>

            <div className='relative h-80 w-full group overflow-hidden'>
                <img 
                    src={image} 
                    alt={title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 opacity-100 lg:opacity-0 group-hover:opacity-100  flex items-center justify-center transition-opacity duration-300">
                    <a href={`/gallery-open/${id}`} className="no-underline cursor-pointer">
                        <button className="px-6 py-2 text-black font-semibold text-sm rounded-md shadow-md bg-[#BB7E1C] hover:text-white transition duration-300">
                            View All Images
                        </button>
                    </a>
                </div>
            </div>

            <div className='px-6 py-10'>
                <h3 className='font-montserrat font-semibold text-[20px] text-[#252A34] mt-4'>
                    {title}
                </h3>
            </div>
        </div>
    );
}