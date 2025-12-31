import React from "react";
import directorImg from "../assets/director.png";
import { Quote, Award, CheckCircle2 } from "lucide-react";

// Jab tak real photo nahi hai, ye sample link kaam karega

const ChairmanMessage = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* LEFT: Image Side */}
          <div className="w-full lg:w-5/12 relative">
            {/* Decorative Border behind image */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-red-600 rounded-[2rem] -z-0"></div>

            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100">
              <img
                src={directorImg}
                alt="Chairman"
                className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white m-4 p-6 rounded-2xl shadow-xl">
                <p className="text-red-600 font-black uppercase text-xs tracking-widest mb-1">
                  Founder & Chairman
                </p>
                <h4 className="text-2xl font-black text-gray-900">
                  Dhannjay Kr Panday
                </h4>
              </div>
            </div>
          </div>

          {/* RIGHT: Content Side */}
          <div className="w-full lg:w-7/12 space-y-8">
            <Quote size={60} className="text-red-100 mb-[-40px]" />
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              Our Vision is to{" "}
              <span className="text-red-600 text-outline">Empower</span> Every
              Student.
            </h2>

            <p className="text-xl text-gray-600 font-medium italic border-l-4 border-red-600 pl-6 leading-relaxed">
              "Vidya Group of Institution is not just a college; it's a dream to
              bring international standard education to the talented youth of
              Gopalganj."
            </p>

            <p className="text-gray-500 leading-relaxed text-lg">
              Since our inception, we have focused on one thing: **Student
              Success**. We believe that every student has the potential to
              lead, and our job is to provide the right environment, technology,
              and mentorship to help them thrive in the real world.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Practical Training",
                "Modern Infrastructure",
                "Job-Oriented Skills",
                "Moral Values",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100"
                >
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span className="font-bold text-gray-700 text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
