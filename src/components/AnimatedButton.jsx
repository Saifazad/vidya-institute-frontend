import { motion } from "framer-motion";

const AnimatedButton = ({
  children,
  onClick,
  type = "primary", // primary (red) ya secondary (green)
  className = "",
}) => {
  // Design settings based on type
  const isPrimary = type === "primary";
  const bgColor = isPrimary ? "bg-[#dc2626]" : "bg-[#16a11b]";
  const shadowColor = isPrimary
    ? "rgba(220, 38, 38, 0.5)"
    : "rgba(72, 187, 120, 0.5)";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      // Pulse Animation logic
      animate={{
        scale: [1, 1.03, 1],
        boxShadow: [
          `0px 0px 0px ${shadowColor}`,
          `0px 0px 15px ${shadowColor}`,
          `0px 0px 0px ${shadowColor}`,
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onClick={onClick}
      className={`${bgColor} text-white px-8 py-3 rounded-md font-bold text-lg shadow-lg transition-colors ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
