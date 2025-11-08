import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollUpButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollTop > 300);
    };

    handleScroll(); // check once immediately
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={showButton ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-[9999] bg-[#BB7E1C] text-white p-3 rounded-full shadow-lg hover:bg-[#e55a2c] transition duration-300 cursor-pointer"
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-xl" />
    </motion.button>
  );
}
