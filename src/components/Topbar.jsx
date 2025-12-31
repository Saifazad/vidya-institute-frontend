import { Link } from "react-router-dom";
import Container from "../layouts/Container";

export default function Topbar() {
  return (
    <div className="bg-green-800 text-white text-xs sm:text-sm">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-2 gap-3">
          {/* Left: Contact */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
            <a
              href="mailto:info@vidyagroup.com"
              className="flex items-center gap-1 hover:text-yellow-400"
            >
              📧
              <span className="break-all">info@vidyagroup.com</span>
            </a>

            <span className="hidden sm:inline">|</span>

            <a
              href="tel:9905191705"
              className="flex items-center gap-1 hover:text-yellow-400"
            >
              📞 +91 9905191705
            </a>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center gap-3">
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-base">
              <span className="hidden sm:block text-xs">Follow:</span>

              <a href="#" className="hover:text-yellow-400">
                📘
              </a>
              <a href="#" className="hover:text-yellow-400">
                📸
              </a>
              <a href="#" className="hover:text-yellow-400">
                ▶️
              </a>
              <a href="#" className="hover:text-yellow-400">
                🐦
              </a>
              <a href="#" className="hover:text-yellow-400">
                💼
              </a>
            </div>

            {/* Admin Login */}
            <Link
              to="/admin/login"
              className="text-yellow-400 hover:underline font-medium text-sm"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
