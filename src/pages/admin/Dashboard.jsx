import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../service/api";
import {
  Users,
  BookOpen,
  MessageSquare,
  ChevronRight,
  Loader2,
  ExternalLink,
} from "lucide-react";

export default function Dashboard() {
  // State for real-time counts
  const [counts, setCounts] = useState({
    admissions: 0,
    courses: 0,
    enquiries: 0,
  });
  const [loading, setLoading] = useState(true);

  // Database se data fetch karne ka logic
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        // Teeno API calls ek saath (Update your URLs if needed)
        const [admRes, courseRes, enqRes] = await Promise.all([
          api.get("/admission"),
          api.get("/courses"),
          api.get("/enquiries"),
        ]);

        setCounts({
          admissions: admRes.data.length,
          courses: courseRes.data.length,
          enquiries: enqRes.data.length,
        });
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const stats = [
    {
      label: "Total Admissions",
      count: counts.admissions,
      icon: <Users size={24} />,
      color: "bg-blue-600",
      link: "/admin/viewadmissions",
    },
    {
      label: "Active Courses",
      count: counts.courses,
      icon: <BookOpen size={24} />,
      color: "bg-green-600",
      link: "/admin/manage-courses",
    },
    {
      label: "New Enquiries",
      count: counts.enquiries,
      icon: <MessageSquare size={24} />,
      color: "bg-purple-600",
      link: "/admin/enquiries",
    },
  ];

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-[60vh] gap-4">
        <Loader2 className="animate-spin text-red-600" size={40} />
        <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">
          Syncing Dashboard...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Welcome Header */}
      <div>
        <h1 className="text-2xl font-black text-gray-800 uppercase tracking-tight">
          Overview
        </h1>
        <p className="text-gray-500 text-sm font-medium">
          Welcome back to your command center. Everything looks good.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
          >
            <div>
              <p className="text-gray-400 text-xs font-black uppercase tracking-widest">
                {item.label}
              </p>
              <h3 className="text-4xl font-black text-gray-800 mt-1">
                {item.count}
              </h3>
              <Link
                to={item.link}
                className="text-blue-600 text-[10px] font-black mt-4 flex items-center gap-1 hover:underline uppercase tracking-tighter"
              >
                View Details <ChevronRight size={12} />
              </Link>
            </div>
            <div
              className={`${
                item.color
              } text-white p-5 rounded-2xl shadow-lg shadow-${
                item.color.split("-")[1]
              }-200`}
            >
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Shortcuts Section */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-black text-gray-800 mb-6 border-b pb-4 uppercase tracking-widest flex items-center gap-2">
          Quick Shortcuts
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/admin/viewadmissions"
            className="p-6 border-2 border-dashed border-gray-100 rounded-2xl hover:border-red-200 hover:bg-red-50/50 text-center transition-all group flex flex-col items-center gap-2"
          >
            <Users
              className="text-gray-400 group-hover:text-red-500 transition-colors"
              size={24}
            />
            <p className="text-xs font-black text-gray-700 uppercase group-hover:text-red-600">
              Manage New Admissions
            </p>
          </Link>

          <button
            onClick={() => window.open("/", "_blank")}
            className="p-6 border-2 border-dashed border-gray-100 rounded-2xl hover:border-blue-200 hover:bg-blue-50/50 text-center transition-all group flex flex-col items-center gap-2"
          >
            <ExternalLink
              className="text-gray-400 group-hover:text-blue-500 transition-colors"
              size={24}
            />
            <p className="text-xs font-black text-gray-700 uppercase group-hover:text-blue-600">
              Launch Live Website
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
