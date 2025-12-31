import React, { useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom"; // Outlet zaroori hai
import {
  Users,
  BookOpen,
  MessageSquare,
  LogOut,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";

export default function AdminLayout() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex relative">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-[#001529] transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 flex flex-col`}
      >
        <div className="p-6 text-xl font-bold border-b border-gray-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-2 font-black tracking-tighter uppercase">
            <LayoutDashboard className="text-red-600" /> Admin Panel
          </div>
          <button className="md:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 mt-6 p-4 space-y-2">
          <Link
            to="/admin/dashboard"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl text-gray-300 transition-all font-bold uppercase text-xs tracking-widest"
          >
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link
            to="/admin/viewadmissions"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl text-gray-300 transition-all font-bold uppercase text-xs tracking-widest"
          >
            <Users size={18} /> Admissions
          </Link>
          <Link
            to="/admin/manage-courses"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl text-gray-300 transition-all font-bold uppercase text-xs tracking-widest"
          >
            <BookOpen size={18} /> Courses
          </Link>
          <Link
            to="/admin/enquiries"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl text-gray-300 transition-all font-bold uppercase text-xs tracking-widest"
          >
            <MessageSquare size={18} /> Enquiries
          </Link>
        </nav>

        <button
          onClick={logout}
          className="m-4 p-3 flex items-center gap-3 bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white rounded-xl transition-all font-bold text-xs"
        >
          <LogOut size={18} /> LOGOUT
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center px-4 md:px-8 border-b">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={24} />
          </button>
          <h2 className="text-sm font-black text-black-400 uppercase tracking-widest">
            Welcome Back Admin!
          </h2>
          <div className="flex items-center gap-3">
            <div className="text-gray-600">Vidya Group</div>
            <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-black">
              A
            </div>
          </div>
        </header>

        <main className="p-4 md:p-8 overflow-y-auto max-h-[calc(100vh-64px)]">
          {/* Yahan aapke sare pages render honge */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
