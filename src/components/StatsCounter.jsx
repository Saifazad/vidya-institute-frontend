import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, BookOpen, Award, GraduationCap, Zap } from "lucide-react";
import Container from "../layouts/Container";

const StatsCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    {
      icon: <Users size={28} />,
      endValue: 500,
      suffix: "+",
      label: "Happy Students",
      desc: "Trust of many families",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: <BookOpen size={28} />,
      endValue: 15,
      suffix: "+",
      label: "Premium Courses",
      desc: "Industry ready programs",
      color: "from-red-600 to-orange-400",
    },
    {
      icon: <Award size={28} />,
      endValue: 100,
      suffix: "%",
      label: "Job Placement",
      desc: "Dedicated career cell",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: <GraduationCap size={28} />,
      endValue: 25,
      suffix: "+",
      label: "Expert Faculty",
      desc: "Qualified educators",
      color: "from-purple-600 to-pink-400",
    },
  ];

  return (
    <section ref={ref} className="relative py-24 bg-[#f8fafc] overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-[2.5rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 flex flex-col items-center lg:items-start text-center lg:text-left overflow-hidden"
            >
              {/* Corner Accent Color */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-[0.03] rounded-bl-full`}
              ></div>

              {/* Icon with Glow */}
              <div
                className={`relative mb-6 p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg transform group-hover:rotate-[10deg] transition-transform duration-500`}
              >
                {item.icon}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} blur-lg opacity-40 rounded-2xl -z-10`}
                ></div>
              </div>

              {/* Number and Suffix */}
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-[1000] text-gray-900 tracking-tighter">
                  {inView ? <CountUp end={item.endValue} duration={3} /> : "0"}
                </span>
                <span className="text-2xl font-black text-red-600">
                  {item.suffix}
                </span>
              </div>

              {/* Label and Description */}
              <div className="mt-2">
                <h4 className="text-sm font-black text-gray-800 uppercase tracking-widest">
                  {item.label}
                </h4>
                <p className="text-xs text-gray-400 font-medium mt-1 uppercase tracking-tighter">
                  {item.desc}
                </p>
              </div>

              {/* Hover Sparkle Effect */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Zap
                  size={16}
                  className="text-red-600 fill-red-600 animate-pulse"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsCounter;
