import BlogCard from '../Cards/BlogCard.jsx';

export default function Blogs() {
    return (
        <section className="flex flex-col mx-4 px-8 lg:mx-30 lg:px-0 my-20 gap-6">
            <div className='flex items-center gap-2'>
                <h5 className='font-montserrat font-semibold text-[18px] text-[#252A34]'>
                    Latest News
                </h5>
                <div className='border-b border-gray-400 h-0 w-14'></div>
            </div>
            <h2 className='font-montserrat font-semibold text-5xl text-[#252A34] w-[40%] lg:w-full md:w-full'>
                Articles You May Read
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </section>
    )
}