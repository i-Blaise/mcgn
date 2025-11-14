import Header from "../components/getInvolved/Header";
import AboutGetInvolved from "../components/getInvolved/AboutGetInvolved"
import CTA from "../components/getInvolved/CTA";
import ProjectsRow from "../components/homepage/ProjectsRow";
import Testimonials from "../components/Testimonials";
import PartnerLogos from "../components/PartnerLogos";
import Footer from "../components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GetInvolved() {
    const sectionFade = {
        initial: { opacity: 0, y: 60, filter: "blur(12px)" },
        whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
        transition: { duration: 0.6, ease: "easeOut" },
        viewport: { once: true, amount: 0.1 },
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
                <AboutGetInvolved />
            </motion.div>
            <motion.div className="!z-10-- !relative--" {...sectionFade}>
                <CTA />
            </motion.div>
            <motion.div className="!z-0-- !relative--" {...sectionFade}>
                <ProjectsRow />
            </motion.div>
            <motion.div {...sectionFade}>
                <Testimonials />
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