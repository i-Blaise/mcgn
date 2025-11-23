import GalleryCard from "../Cards/GalleryCard"
import NzulenzuImage from '../../assets/gallery/nzulenzu/cover.jpeg';
import PantangImage from '../../assets/gallery/pantang/1.jpeg';
import StreetFeedingImage from '../../assets/gallery/streetfeeding/2.jpeg';

export default function NBSection() {
    return (
        <section className="flex flex-col mx-4 px-8 lg:mx-30 lg:px-0 my-20 gap-4 mt-30">
            <div className='flex items-center gap-2'>
                <h5 className='font-montserrat font-semibold text-[18px] text-[#252A34] capitalize'>
                    Explore Our Visual Stories
                </h5>
                <div className='border-b border-gray-400 h-0 w-14'></div>
            </div>
            <h1 className="font-montserrat font-semibold text-4xl">
                Gallery Images & Videos
            </h1>

            <div className="flex flex-col mt-4">
                <div className="flex flex-col md:flex-row gap-4 justify-end border-b-1 border-b-[#F9A825] py-4 px-4 text-[16px] font-montserrat font-medium text-[#595959] cursor-pointer">
                    <p className="hover:underline">All</p>
                    <p className="hover:underline">Health & Wellness</p>
                    <p className="hover:underline">Education</p>
                    <p className="hover:underline">Volunteering</p>
                    <p className="hover:underline">Events</p>
                    <p className="hover:underline">Videos</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">
                <GalleryCard 
                title="Nzulenzu Community Outreach"
                id="1"
                image={NzulenzuImage}
                />
                <GalleryCard 
                title="Pantang Mental Hospital Visit with Donations"
                id="2"
                image={PantangImage}
                />
                <GalleryCard 
                title="Street Feeding on Christmas Day"
                id="3"
                image={StreetFeedingImage}
                />
            </div>
        </section>
    )
}