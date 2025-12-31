import { Link } from "react-router-dom";
import {
  ChevronRight,
  GraduationCap,
  Clock,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const CourseCard = ({ course }) => {
  // Gradient colors for a more premium feel
  const gradients = [
    "from-blue-600 to-indigo-800",
    "from-emerald-500 to-teal-700",
    "from-rose-500 to-red-700",
    "from-amber-500 to-orange-700",
    "from-violet-500 to-purple-800",
  ];
  const selectedGradient = gradients[course.id % gradients.length];

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(239,68,68,0.15)] overflow-hidden border border-gray-100 flex flex-col h-full transition-all duration-500"
    >
      {/* 1. Header Section with Gradient */}
      <div
        className={`relative h-40 bg-gradient-to-br ${selectedGradient} p-8 flex flex-col justify-end overflow-hidden`}
      >
        {/* Abstract Background Decor */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

        <div className="relative z-10">
          <div className="bg-white/20 backdrop-blur-md w-10 h-10 rounded-xl flex items-center justify-center mb-3">
            <GraduationCap className="text-white" size={24} />
          </div>
          <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-[1.1]">
            {course.title}
          </h3>
        </div>

        {/* Floating Tag */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
            Best Seller
          </span>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="p-6 flex flex-col flex-grow bg-white">
        <div className="flex items-center gap-4 mb-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <span className="flex items-center gap-1">
            <Clock size={14} className="text-red-500" />{" "}
            {course.duration || "2 Years"}
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle size={14} className="text-green-500" /> UGC Approved
          </span>
        </div>

        <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed font-medium">
          {course.description ||
            "In-depth professional training designed to prepare students for the global industry."}
        </p>

        {/* 3. Action Section */}
        <div className="pt-5 border-t border-gray-50 flex items-center justify-between">
          <Link
            to={`/courses/${course.id}`}
            className="group/btn flex items-center gap-2 text-gray-900 font-black text-xs uppercase tracking-widest hover:text-red-600 transition-colors"
          >
            Explore More
            <div className="p-1.5 bg-gray-50 rounded-lg group-hover/btn:bg-red-50 group-hover/btn:translate-x-1 transition-all">
              <ChevronRight size={14} />
            </div>
          </Link>

          <Link
            to="/admission"
            className="p-2 bg-red-600 text-white rounded-xl shadow-lg shadow-red-200 hover:scale-110 transition-transform"
            title="Apply Now"
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
