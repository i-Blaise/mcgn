export default function StatCard({ statImage, statNumber, statDescription }) {
    return (
        <div className='bg-[#FEF6E9] flex flex-col justify-center items-center p-8 w-[306px] h-[372px] hover:shadow-lg transition-shadow duration-300'>
            <img src={statImage} alt="Stat 1" />
            <h2 className='font-montserrat font-bold text-4xl text-[#252A34] mt-6'>{statNumber}</h2>
            <p className='font-montserrat font-normal text-[16px] text-center text-[#555555] mt-2'>{statDescription}</p>
        </div>
    )
}