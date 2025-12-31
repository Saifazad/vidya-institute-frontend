import React from "react";
import students from "../assets/students.png";
import {
  FlaskConical,
  BookOpen,
  IndianRupee,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FlaskConical size={30} />,
      title: "Modern Labs",
      desc: "Latest technology aur equipment ke saath advanced laboratories.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: <BookOpen size={30} />,
      title: "Library Facilities",
      desc: "Hazaaron books aur digital resources ki badi collection.",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: <IndianRupee size={30} />,
      title: "Affordable Fee",
      desc: "Gopalganj mein sabse kam fees mein world-class education.",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: <Briefcase size={30} />,
      title: "Job Preparation",
      desc: "Interview skills aur personality development par khaas dhyaan.",
      color: "text-red-600",
      bg: "bg-red-50",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* LEFT: Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h4 className="text-red-600 font-black uppercase tracking-[0.3em] text-xs">
                Excellence in Education
              </h4>
              <h2 className="text-4xl md:text-5xl font-[1000] text-gray-900 leading-tight">
                Why Vidya Group is the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                  Right Choice For You?
                </span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Hum sirf padhate nahi hain, hum aapko kal ke liye tayyar karte
                hain. Hamara focus practical knowledge aur career growth par
                hota hai.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all group"
                >
                  <div
                    className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-black text-gray-800 mb-2 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image/Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              {/* Yahan aap apne campus ki ek acchi photo laga sakte hain */}
              <img
                src={students}
                alt="Campus Life"
                className="w-full h-[600px] object-cover"
              />

              {/* Floating Success Card */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl flex items-center gap-4 border border-white/20">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-2xl font-black text-gray-900 leading-none">
                    100%
                  </p>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                    Placement Record
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Background Circles */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -z-0 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-0 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
