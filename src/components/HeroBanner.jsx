import React from "react";
import HeroBannerImg from "../assets/vidya-banner-enhanced3.png";
import { GraduationCap, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative w-full bg-sky-50  pt-10 pb-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-red-50/50 to-transparent -z-10" />

      <div className="container mx-auto px-4">
        {/* 1. Top Content (Text) */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6 border border-red-200 animate-pulse">
            <Sparkles size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">
              Enrollment Open 2025-26
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-[1000] text-gray-900 leading-tight mb-6 tracking-tighter">
            Better Education, <span className="text-red-600">Brighter</span>{" "}
            Future.
          </h1>

          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-8">
            Vidya Group of Institution, Gopalganj – A place where learning meets
            excellence. Your dream career starts with the right education.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/admission"
              className="w-full sm:w-auto px-10 py-4 bg-red-600 text-white font-black rounded-2xl hover:bg-gray-900 transition-all shadow-xl shadow-red-200 uppercase tracking-widest text-xs"
            >
              Apply For Admission
            </a>
            <a
              href="/courses"
              className="w-full sm:w-auto px-10 py-4 bg-white text-gray-900 border-2 border-gray-100 font-black rounded-2xl hover:border-red-600 hover:text-red-600 transition-all uppercase tracking-widest text-xs"
            >
              Explore Courses
            </a>
          </div>
        </div>

        {/* 2. MAIN IMAGE (Pura dikhane ke liye logic) */}
        <div className="relative max-w-6xl mx-auto">
          {/* Glassy Shadow Effect behind image */}
          <div className="absolute inset-0 bg-red-600/10 blur-[100px] rounded-full scale-75 -z-10" />

          <div className="bg-sky-50  p-2 md:p-4 rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
            <img
              src={HeroBannerImg}
              alt="Vidya Group Banner"
              className="w-full h-auto rounded-[1.5rem] md:rounded-[2.5rem] object-contain shadow-inner"
              // h-auto aur object-contain se image poori dikhegi
            />
          </div>

          {/* Floating Badges (Side mein trust dikhane ke liye) */}
          <div className="absolute -bottom-6 -right-4 md:right-10 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-gray-50 hidden sm:flex">
            <div className="bg-green-100 p-2 rounded-xl text-green-600">
              <CheckCircle size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase leading-none">
                Verified
              </p>
              <p className="text-sm font-bold text-gray-800">UGC Recognized</p>
            </div>
          </div>

          <div className="absolute -top-6 -left-4 md:left-10 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-gray-100 hidden sm:flex">
            <div className="bg-blue-600 p-2 rounded-xl text-white">
              <GraduationCap size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase leading-none">
                Campus
              </p>
              <p className="text-sm font-bold text-gray-800">
                Gopalganj, Bihar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
