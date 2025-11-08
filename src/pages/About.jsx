import Header from '../components/aboutpage/Header.jsx';
import OurStory from '../components/aboutpage/OurStory.jsx';
import AboutUs from '../components/aboutpage/AboutUs.jsx';
import OurTeam from '../components/OurTeam.jsx';
import Testimonials from '../components/Testimonials.jsx';
import StatsRow from '../components/homepage/StatsRow.jsx';
import ProjectsRow from '../components/homepage/ProjectsRow.jsx';
import PartnerLogos from '../components/PartnerLogos.jsx';
import Footer from '../components/Footer.jsx';

export default function About() {
    return(
        <>
            <Header />
            <OurStory />
            <AboutUs />
            <OurTeam />
            <Testimonials />
            <StatsRow />
            <ProjectsRow />
            <PartnerLogos />
            <Footer />
        </>
    );
}