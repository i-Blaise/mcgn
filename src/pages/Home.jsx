import Header from '../components/homepage/Header.jsx';
import WhoWeAre from '../components/homepage/WhoWeAre.jsx';
import HomeAbout from '../components/homepage/HomeAbout.jsx';
import ProjectsRow from '../components/homepage/ProjectsRow.jsx';
import Testimonials from '../components/Testimonials.jsx';
import StatsRow from '../components/homepage/StatsRow.jsx';
import Blogs from '../components/homepage/Blogs.jsx';
import PartnerLogos from '../components/PartnerLogos.jsx';
import Footer from '../components/Footer.jsx';
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
    const sectionFade = {
        initial: { opacity: 0, y: 40, filter: "blur(8px)" },
        whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
        transition: { duration: 0.5, ease: "easeOut" },
        viewport: { once: true, amount: 0.3 },
    };

    const fadeLeft = {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
    };
    return (
        <>
            <Header />
            <motion.div {...sectionFade}>
                <WhoWeAre />
            </motion.div>
            <motion.div {...sectionFade}>
                <HomeAbout />
            </motion.div>
            <motion.div {...sectionFade}>
                <ProjectsRow />
            </motion.div>
            <motion.div {...sectionFade}>
                <Testimonials />
            </motion.div>
            <motion.div {...sectionFade}>
                <StatsRow />
            </motion.div>
            <motion.div {...sectionFade}>
                <Blogs />
            </motion.div>
            <motion.div {...sectionFade}>
                <PartnerLogos />
            </motion.div>
            <motion.div {...sectionFade}>
                <Footer />
            </motion.div>
        </>
    )
}