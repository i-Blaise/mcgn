import TeamCard from "./Cards/TeamCard";
import FrankImg from "../assets/team/frank.jpg";
import Blaise from "../assets/team/blaise.jpg";

export default function OurTeam() {
    return (
        <section className="flex flex-col mx-4 lg:mx-46 lg:px-0 my-20 md:px-0 gap-4 justify-center items-start">
            <div className='flex items-center gap-2'>
                <h5 className='font-montserrat font-semibold text-[18px] text-[#252A34] mr-2'>
                    Our Team
                </h5>
                <div className='border-b border-gray-400 h-0 w-14'></div>
            </div>
            <h2 className="font-semibold text-4xl text-[#252A3]">The Faces Behind the Movement</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
                <TeamCard
                    TeamImage={FrankImg}
                    Name="Frank Toulassi"
                    Position="Founder"
                    socialLinks={{
                        facebook: "https://facebook.com/frank",
                        instagram: "https://instagram.com/frank",
                        twitter: "https://instagram.com/frank", // ← omitted = icon hidden
                        linkedin: "https://linkedin.com/in/frank",
                    }}
                />
                <TeamCard 
                    TeamImage={Blaise}
                    Name="Blaise S. Mennia"
                    Position="Co-Founder"
                    socialLinks={{
                        facebook: "https://facebook.com/frank",
                        instagram: "https://instagram.com/frank",
                        twitter: "https://instagram.com/frank",
                        linkedin: "https://linkedin.com/in/frank",
                    }}
                />
                <TeamCard 
                    TeamImage={Blaise}
                    Name="Blaise S. Mennia"
                    Position="Co-Founder"
                    socialLinks={{
                        facebook: "https://facebook.com/frank",
                        instagram: "https://instagram.com/frank",
                        twitter: "https://instagram.com/frank",
                        linkedin: "https://linkedin.com/in/frank",
                    }}
                />
            </div>
        </section>
    );
}