import HeaderPattern from '../../assets/images/header-pattern.svg';

export default function Header() {
    return (
        <header className="bg-[url('/images/about-header.png')] bg-cover bg-no-repeat md:bg-center lg:bg-center h-[400px] flex flex-col items-center justify-center text-white mt-[-4rem] lg:mt-[-108px] md:mt-[-70px] z-100 relative">
            <div className="flex flex-col gap-4 justify-center items-center text-white">
                <h1 className="text-[42px] font-bold">Contact Us</h1>
                <a href="/" className="flex items-center gap-2 hover:underline cursor-pointer">
                    <p className="text-[16px] font-semibold ">Home / Contact Us</p>
                </a>
            </div>
            <img src={HeaderPattern} alt="" 
            className='absolute right-0 bottom-0 z-200 pointer-events-none select-none'
            />
        </header>
    );
}