import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import LogoImg from "../assets/Logo.png";
import Container from "../layouts/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll karne par Navbar ka background change hoga
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Admission", path: "/admission" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* 1. TOP BAR (Contact Info) - Sirf Desktop par dikhega */}
      <div className="hidden lg:block bg-[#001529] text-white py-2 border-b border-white/10">
        <Container>
          <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-[0.1em]">
            <div className="flex gap-6">
              <span className="flex items-center gap-2">
                <Phone size={14} className="text-red-500" /> +91 8084215228
              </span>
              <span className="flex items-center gap-2">
                <Mail size={14} className="text-red-500" /> info@vidyagroup.com
              </span>
            </div>
            <div className="flex items-center gap-2 italic">
              <GraduationCap size={16} className="text-red-500" /> Shaping
              Leaders of Tomorrow
            </div>
          </div>
        </Container>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav
        className={`sticky top-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md py-2 shadow-xl"
            : "bg-white py-4 shadow-md"
        }`}
      >
        <Container>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-white p-1 rounded-xl transition-transform group-hover:scale-105">
                <img
                  src={LogoImg}
                  alt="Vidya Group"
                  className="h-12 md:h-14 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-gray-900 leading-tight text-lg md:text-xl uppercase tracking-tighter">
                  Vidya Group
                </span>
                <span className="text-[10px] font-bold text-red-600 uppercase tracking-[0.2em] leading-none">
                  Of Institution
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-xl text-sm font-black uppercase tracking-widest transition-all duration-200 ${
                      location.pathname === link.path
                        ? "bg-red-600 text-white shadow-lg shadow-red-200"
                        : "text-gray-600 hover:text-red-600 hover:bg-red-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 bg-gray-50 rounded-xl text-gray-900 hover:bg-red-50 transition-colors"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </Container>

        {/* 3. MOBILE MENU DRAWER (Slide-down effect) */}
        <div
          className={`md:hidden absolute w-full bg-white border-t transition-all duration-300 overflow-hidden ${
            open ? "max-h-screen opacity-100 shadow-2xl" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  onClick={() => setOpen(false)}
                  to={link.path}
                  className={`flex items-center justify-between p-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
                    location.pathname === link.path
                      ? "bg-red-600 text-white"
                      : "bg-gray-50 text-gray-600 hover:bg-red-50"
                  }`}
                >
                  {link.name}
                  <ChevronRight size={16} />
                </Link>
              </li>
            ))}
            <div className="pt-4 px-2">
              <Link
                to="/admission"
                className="block w-full text-center bg-[#001529] text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest"
              >
                Apply Now 2025
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}
