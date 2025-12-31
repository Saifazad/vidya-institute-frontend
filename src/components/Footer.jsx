import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#002e5b] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 1. About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-l-4 border-red-600 pl-3">
            VIDYA GROUP
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Leading institution in Gopalganj providing professional courses like
            Nursing, BCA, BBA with 100% job assistance and Bihar Student Credit
            Card facility.
          </p>
          <div className="flex gap-4 mt-6">
            <Facebook className="hover:text-red-500 cursor-pointer" />
            <Youtube className="hover:text-red-500 cursor-pointer" />
            <Instagram className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-l-4 border-red-600 pl-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/courses" className="hover:text-white transition">
                All Courses
              </Link>
            </li>
            <li>
              <Link to="/admission" className="hover:text-white transition">
                Admission Process
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-white transition">
                Campus Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* 3. Contact Info (From Poster) */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-l-4 border-red-600 pl-3">
            Contact Us
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin className="text-red-500 shrink-0" size={20} />
              <span>बंजारी नियर ब्रह्मस्थान, गोपालगंज - 841428</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-red-500 shrink-0" size={20} />
              <span>+91 9905191705, 8936033812</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-red-500 shrink-0" size={20} />
              <span>info@vidyagroup.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-900 mt-10 pt-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Vidya Group of Institution. Designed with
          ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
