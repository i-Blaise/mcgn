import ProjectCard from "../Cards/ProjectCard"

export default function ProjectsRow() {
    return (
        <section className="flex flex-col mx-4 px-8 lg:mx-30 lg:px-0 my-20 gap-4 mt-30">
            <div className='flex items-center gap-2'>
                <h5 className='font-montserrat font-semibold text-[18px] text-[#252A34] capitalize'>
                    See our work in action
                </h5>
                <div className='border-b border-gray-400 h-0 w-14'></div>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-between">
                <h2 className="font-montserrat font-semibold text-4xl">
                    Our Impactful Projects & Campaigns
                </h2>                
                <button className='mt-6'>
                    <span className="bg-[#BB7E1C] px-7 py-3 text-white font-montserrat font-medium text-[16px] hover:bg-[#e55a2c] transition duration-300 cursor-pointer">View All</span>
                </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}