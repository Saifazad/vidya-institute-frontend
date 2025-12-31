import React from "react";
import { MessageCircle } from "lucide-react"; // Icon use kar rahe hain, image ki zarurat nahi padegi

export default function WhatsAppButton() {
  const phoneNumber = "918084215228"; // Hamesha 91 (country code) ke saath likhein
  const message = "Hello! I want to know more about Vidya Group courses.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip: Hover karne par dikhega */}
      <span className="absolute right-16 bg-white text-gray-800 text-xs font-bold px-3 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gray-100 whitespace-nowrap hidden md:block">
        Chat with us! 👋
      </span>

      {/* Ping Animation Effect (Green circle flashing) */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

      {/* Main Button */}
      <button
        onClick={handleClick}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-2xl shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 group"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" />

        {/* Mobile ke liye Notification Dot */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
        </span>
      </button>
    </div>
  );
}
