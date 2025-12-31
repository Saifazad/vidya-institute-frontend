import { useState, useEffect } from "react";
import CourseCard from "../components/CourseCard";
import HeroBanner from "../components/HeroBanner";
import Container from "../layouts/Container";
import { api } from "../service/api";
import {
  ShieldCheck,
  GraduationCap,
  CheckCircle,
  Laptop,
  Book,
  Coffee,
  Bus,
  Wifi,
  HeartPulse,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import StatsCounter from "../components/StatsCounter";
import ChairmanMessage from "../components/ChairmanMessage";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("/courses").then((res) => setCourses(res.data));
  }, []);

  const facilities = [
    { name: "Modern Computer Lab", icon: <Laptop size={24} /> },
    { name: "Digital Library", icon: <Book size={24} /> },
    { name: "Hygienic Cafeteria", icon: <Coffee size={24} /> },
    { name: "Transport Facility", icon: <Bus size={24} /> },
    { name: "Campus Wi-Fi", icon: <Wifi size={24} /> },
    { name: "24/7 Security", icon: <ShieldCheck size={24} /> },
    { name: "Medical Room", icon: <HeartPulse size={24} /> },
    { name: "Smart Classrooms", icon: <Building2 size={24} /> },
  ];

  return (
    <div className="bg-[#f0f9ff]">
      {" "}
      {/* Main Light Blue/Ice Blue Background */}
      <HeroBanner />
      {/* Stats Counter ab Light Background par chamkega */}
      <StatsCounter />
      {/* 1. Trust Bar - New Light Blue Design */}
      <div className="bg-sky-50 py-12 border-y border-sky-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-5 p-6 bg-white rounded-3xl shadow-sm border border-sky-100 group hover:shadow-md transition-all">
              <div className="bg-sky-100 p-4 rounded-2xl text-sky-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 className="font-black text-gray-800 uppercase text-xs tracking-widest">
                  100% Job Help
                </h3>
                <p className="text-[10px] font-bold text-sky-400 uppercase">
                  Assistance Program
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 bg-white rounded-3xl shadow-sm border border-sky-100 group hover:shadow-md transition-all">
              <div className="bg-sky-100 p-4 rounded-2xl text-sky-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                <GraduationCap size={32} />
              </div>
              <div>
                <h3 className="font-black text-gray-800 uppercase text-xs tracking-widest">
                  Student Credit Card
                </h3>
                <p className="text-[10px] font-bold text-sky-400 uppercase">
                  Bihar Govt. Scheme
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 bg-white rounded-3xl shadow-sm border border-sky-100 group hover:shadow-md transition-all">
              <div className="bg-sky-100 p-4 rounded-2xl text-sky-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                <CheckCircle size={32} />
              </div>
              <div>
                <h3 className="font-black text-gray-800 uppercase text-xs tracking-widest">
                  Govt. Approved
                </h3>
                <p className="text-[10px] font-bold text-sky-400 uppercase">
                  Recognized Courses
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-white">
        <ChairmanMessage />
      </div>
      {/* 2. Course Section - Soft Sky Blue Background */}
      <section className="py-24 bg-sky-50/50">
        <Container>
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
                Our Programs
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">
                Explore <span className="text-sky-600">Courses</span>
              </h2>
            </div>
            <button className="hidden md:flex items-center gap-2 font-black text-xs uppercase tracking-[0.2em] text-sky-600 hover:text-red-600 transition-all">
              View All <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.slice(0, 4).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </Container>
      </section>
      <div className="bg-white">
        <WhyChooseUs />
      </div>
      {/* 3. Facilities Section - Clean Light Look */}
      <section className="py-24 bg-sky-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter mb-4">
              World-Class Facilities
            </h2>
            <p className="text-sky-600/70 font-bold uppercase text-[10px] tracking-[0.3em]">
              Excellence in Infrastructure
            </p>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((item, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-[2.5rem] hover:shadow-2xl hover:shadow-sky-200/50 transition-all duration-500 border border-sky-100 text-center"
              >
                <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-gray-800">
                  {item.name}
                </h3>
                <div className="mt-4 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 size={14} className="text-green-500" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Available
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
