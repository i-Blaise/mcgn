import Header from "../components/getInvolved/Header";
import AboutGetInvolved from "../components/getInvolved/AboutGetInvolved"
import CTA from "../components/getInvolved/CTA";
import ProjectsRow from "../components/homepage/ProjectsRow";
import Testimonials from "../components/Testimonials";
import PartnerLogos from "../components/PartnerLogos";
import Footer from "../components/Footer";

export default function GetInvolved() {
    return (
        <>
            <Header />
            <AboutGetInvolved />
            <CTA />
            <ProjectsRow />
            <Testimonials />
            <PartnerLogos />
            <Footer />
        </>
    )
}