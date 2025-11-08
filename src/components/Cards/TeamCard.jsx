import FrankImg from "../../assets/team/frank.jpg";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function TeamCard({
  TeamImage,
  Name,
  Position,
  socialLinks = {},
}) {
  // Shared hover state for the whole card
  const isCardHovered = useMotionValue(0);
  const iconOpacity = useTransform(isCardHovered, [0, 1], [0, 1]);
  const iconY = useTransform(isCardHovered, [0, 1], [10, 0]);

  // Individual icon hover animation
  const iconHoverVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.2, transition: { duration: 0.2 } },
  };

  // Render icon only if link exists
  const renderIcon = (Icon, href, colorClass, hoverColorClass) => {
    if (!href || href.trim() === "") return null;

    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        variants={iconHoverVariants}
        initial="rest"
        whileHover="hover"
        className={`${colorClass} ${hoverColorClass} transition-colors`}
      >
        <Icon className="text-xl" />
      </motion.a>
    );
  };

  return (
    <motion.div
      className="flex flex-col overflow-hidden cursor-pointer
                 shadow-[0px_10px_25px_rgba(37,42,52,0.08)]
                 hover:shadow-[0px_15px_30px_rgba(37,42,52,0.15)]
                 transition-shadow duration-300"
      onHoverStart={() => isCardHovered.set(1)}
      onHoverEnd={() => isCardHovered.set(0)}
    >
      {/* Image + Social Icons */}
      <div className="relative">
        <img
          src={TeamImage}
          alt={`${Name} – ${Position}`}
          className="object-cover w-full h-[320px]"
        />

        {/* Social Icons Overlay */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2
                     flex gap-6 bg-white/40 backdrop-blur-md
                     px-4 py-2 rounded-xl"
          style={{ opacity: iconOpacity, y: iconY }}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isCardHovered.get() === 1 ? 1 : 0,
            y: isCardHovered.get() === 1 ? 0 : 10,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {renderIcon(FaFacebook, socialLinks.facebook, "text-blue-600", "hover:text-blue-700")}
          {renderIcon(FaInstagram, socialLinks.instagram, "text-[#E1306C]", "hover:text-pink-600")}
          {renderIcon(FaXTwitter, socialLinks.twitter, "text-gray-900", "hover:text-black")}
          {renderIcon(FaLinkedinIn, socialLinks.linkedin, "text-blue-600", "hover:text-blue-700")}
        </motion.div>
      </div>

      {/* Name and Position */}
      <div className="flex flex-col gap-2 pt-6 pb-8 px-4">
        <h4 className="font-semibold text-lg">{Name}</h4>
        <p className="text-sm text-[#555555]">{Position}</p>
      </div>
    </motion.div>
  );
}