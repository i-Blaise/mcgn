import Header from '../components/aboutpage/Header.jsx';
import OurStory from '../components/aboutpage/OurStory.jsx';
import AboutUs from '../components/aboutpage/AboutUs.jsx';
import OurTeam from '../components/OurTeam.jsx';
import Testimonials from '../components/Testimonials.jsx';
import StatsRow from '../components/homepage/StatsRow.jsx';
import ProjectsRow from '../components/homepage/ProjectsRow.jsx';
import PartnerLogos from '../components/PartnerLogos.jsx';
import Footer from '../components/Footer.jsx';
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
    const sectionFade = {
        initial: { opacity: 0, y: 60, filter: "blur(12px)" },
        whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
        transition: { duration: 0.6, ease: "easeOut" },
        viewport: { once: true, amount: 0.1 },
    };
    return(
        <>
            <Header />
            <motion.div {...sectionFade}>
                <OurStory />
            </motion.div>
            <motion.div {...sectionFade}>
                <AboutUs />
            </motion.div>
            <motion.div {...sectionFade} className='mt-[-26rem] lg:mt-[-6rem]'>
                <OurTeam />
            </motion.div>
            <motion.div {...sectionFade}>
                <Testimonials />
            </motion.div>
            <motion.div {...sectionFade}>
                <StatsRow />
            </motion.div>
            <motion.div {...sectionFade}>
                <ProjectsRow />
            </motion.div>
            <motion.div {...sectionFade}>
                <PartnerLogos />
            </motion.div>
            <motion.div {...sectionFade}>
                <Footer />
            </motion.div>
        </>
    );
}