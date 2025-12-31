import React, { useEffect, useState } from "react";
import { api } from "../../service/api";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Trash2,
  MessageCircle,
  PhoneCall,
  Clock,
  Search,
  Loader2,
} from "lucide-react";

export default function Enquiries() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const res = await api.get("/enquiries");
      setData(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteEnquiry = async (id) => {
    if (window.confirm("Are you sure to delete the enquiry ?")) {
      try {
        await api.delete(`/enquiries/${id}`);
        setData(data.filter((item) => item.id !== id));
      } catch (err) {
        alert("Delete failed!");
      }
    }
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-800 uppercase tracking-tight">
            Website Enquiries
          </h1>
          <p className="text-gray-500 text-sm font-medium">
            Manage messages from the contact form
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative group">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by name or phone..."
            className="pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl w-full md:w-80 outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all shadow-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center h-64 gap-3">
          <Loader2 className="animate-spin text-red-600" size={40} />
          <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">
            Loading Messages...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredData.length > 0 ? (
            filteredData.map((e) => (
              <div
                key={e.id}
                className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 font-bold text-xl uppercase">
                        {e.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-black text-gray-800 uppercase tracking-tight">
                          {e.name}
                        </h3>
                        <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase mt-0.5">
                          <Clock size={12} /> {new Date().toLocaleDateString()}{" "}
                          {/* Replace with e.created_at if available */}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteEnquiry(e.id)}
                      className="p-2 text-gray-300 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium italic bg-gray-50 p-3 rounded-xl border border-dashed border-gray-200">
                      <MessageSquare
                        size={16}
                        className="shrink-0 text-blue-500"
                      />
                      "{e.message}"
                    </div>
                    <div className="flex flex-wrap gap-4 mt-2 px-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
                        <Mail size={14} className="text-red-500" /> {e.email}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
                        <Phone size={14} className="text-green-500" /> {e.phone}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t border-gray-50">
                  <a
                    href={`tel:${e.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-50 text-blue-600 py-2 rounded-xl text-xs font-black hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <PhoneCall size={14} /> CALL NOW
                  </a>
                  <a
                    href={`https://wa.me/91${e.phone}?text=Hello ${e.name}, thank you for contacting Vidya Group.`}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-50 text-green-600 py-2 rounded-xl text-xs font-black hover:bg-green-600 hover:text-white transition-all"
                  >
                    <MessageCircle size={14} /> WHATSAPP
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full bg-white p-20 rounded-3xl border border-dashed border-gray-200 text-center">
              <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">
                No enquiries found
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
