import React from "react";
import { motion } from "framer-motion";
import { Radio, ArrowUpRight, Sparkles } from "lucide-react";

const NoticeBar = () => {
  const notices = [
    "Admission Open for Session 2025-26 - Limited Seats!",
    "Bihar Student Credit Card Facility Available",
    "100% Job Guarantee in Nursing & Paramedical",
    "New Digital Classrooms with Fully AC Campus",
  ];

  return (
    <div className="sticky top-[88px] left-0 w-full z-40 h-10 bg-[#012b52] border-b border-white/5 flex items-center overflow-hidden">
      {/* 1. Live Indicator Section */}
      <div className="h-full px-4 bg-red-600 flex items-center gap-2 relative z-20">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </div>
        <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] whitespace-nowrap">
          Live Updates
        </span>
        {/* Decorative Triangle */}
        <div className="absolute top-0 -right-[15px] h-full w-4 bg-red-600 [clip-path:polygon(0_0,0%_100%,100%_100%)]"></div>
      </div>

      {/* 2. Infinite Scrolling Ticker */}
      <div className="flex-1 relative flex items-center overflow-hidden h-full">
        {/* Edge Blurs for professional look */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#001529] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#001529] to-transparent z-10"></div>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={{ transition: { duration: 60 } }} // Hover par slow ho jayega
          className="flex whitespace-nowrap gap-12 items-center px-10"
        >
          {/* Mapping Notices Multiple Times for seamless loop */}
          {[...notices, ...notices].map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <Sparkles
                size={14}
                className="text-yellow-400 group-hover:rotate-12 transition-transform"
              />
              <span className="text-[13px] font-medium text-gray-300 group-hover:text-white transition-colors tracking-wide">
                {text}
              </span>
              <div className="h-1 w-1 rounded-full bg-gray-600"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. Action Link (Visible on Desktop) */}
      <div className="hidden md:flex items-center px-6 h-full border-l border-white/10 group cursor-pointer hover:bg-white/5 transition-all">
        <span className="text-[11px] font-bold text-red-500 mr-2 uppercase tracking-wider">
          Apply Now
        </span>
        <ArrowUpRight
          size={14}
          className="text-red-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
        />
      </div>
    </div>
  );
};

export default NoticeBar;
