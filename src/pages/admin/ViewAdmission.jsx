import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  User,
  Phone,
  Mail,
  BookOpen,
  Eye,
  Search,
  Loader2,
  Trash2,
  MessageCircle,
  PhoneCall,
  CheckCircle,
  Clock,
} from "lucide-react";
import { api } from "../../service/api";

export default function ViewAdmissions() {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get("/admission");
      setAdmissions(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteHandler = async (id) => {
    if (
      window.confirm("Bhai, kya aap sure hain ki ye record delete karna hai?")
    ) {
      try {
        await api.delete(`/admission/${id}`);
        setAdmissions(admissions.filter((item) => item.id !== id));
      } catch (err) {
        alert("Delete nahi ho paya!");
      }
    }
  };

  const filteredAdmissions = admissions.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.includes(searchTerm)
  );

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* 1. Header with Modern Stats */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">
            Student Admissions
          </h1>
          <p className="text-gray-500 font-medium">
            Total Received:{" "}
            <span className="text-blue-600 font-bold">{admissions.length}</span>
          </p>
        </div>

        <div className="relative group">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by name or mobile..."
            className="pl-12 pr-6 py-3 border-2 border-white shadow-sm rounded-2xl w-full md:w-96 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col justify-center items-center h-96 gap-4">
          <Loader2 className="animate-spin text-blue-600" size={50} />
          <p className="text-gray-500 animate-pulse">
            Loading Students Data...
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="p-5 font-bold uppercase text-[11px] tracking-widest">
                    Student
                  </th>
                  <th className="p-5 font-bold uppercase text-[11px] tracking-widest">
                    Course Info
                  </th>
                  <th className="p-5 font-bold uppercase text-[11px] tracking-widest">
                    Contact Details
                  </th>
                  <th className="p-5 font-bold uppercase text-[11px] tracking-widest text-center">
                    Docs
                  </th>
                  <th className="p-5 font-bold uppercase text-[11px] tracking-widest text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredAdmissions.map((student) => (
                  <tr
                    key={student.id}
                    className="hover:bg-blue-50/30 transition-all group"
                  >
                    {/* Profile & Name */}
                    <td className="p-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={`http://localhost:5001/uploads/${student.photo}`}
                            className="h-14 w-14 rounded-2xl object-cover ring-2 ring-gray-100 group-hover:ring-blue-400 transition-all shadow-md"
                            onError={(e) =>
                              (e.target.src =
                                "https://ui-avatars.com/api/?name=" +
                                student.name)
                            }
                          />
                          <div className="absolute -bottom-1 -right-1 bg-green-500 h-4 w-4 rounded-full border-2 border-white shadow-sm"></div>
                        </div>
                        <div>
                          <div className="font-black text-gray-800 text-lg uppercase leading-none">
                            {student.name}
                          </div>
                          <div className="text-xs text-gray-400 font-bold mt-1 uppercase tracking-tighter">
                            ID: #2025-{student.id}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Course with Badge */}
                    <td className="p-5">
                      <div className="flex flex-col gap-1">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-black w-fit border border-red-100">
                          <BookOpen size={12} /> {student.course}
                        </span>
                        <span className="text-[10px] text-gray-400 font-bold ml-1">
                          ACADEMIC SESSION 25-26
                        </span>
                      </div>
                    </td>

                    {/* Contact - Direct Actions */}
                    <td className="p-5">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                          <Phone size={14} className="text-blue-500" />{" "}
                          {student.phone}
                        </div>
                        <div className="flex gap-2 mt-1">
                          {/* Quick WhatsApp */}
                          <a
                            href={`https://wa.me/91${student.phone}?text=Hello ${student.name}, I am calling from Vidya Group regarding your admission enquiry.`}
                            target="_blank"
                            className="p-1.5 bg-green-100 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition-all shadow-sm"
                            title="WhatsApp Student"
                          >
                            <MessageCircle size={16} />
                          </a>
                          {/* Quick Call */}
                          <a
                            href={`tel:${student.phone}`}
                            className="p-1.5 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                            title="Call Student"
                          >
                            <PhoneCall size={16} />
                          </a>
                        </div>
                      </div>
                    </td>

                    {/* View Document Button */}
                    <td className="p-5 text-center">
                      <a
                        href={`http://localhost:5001/uploads/${student.document}`}
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-xl hover:bg-black hover:text-white transition-all text-[11px] font-black shadow-sm"
                      >
                        <Eye size={14} /> VIEW DOC
                      </a>
                    </td>

                    {/* Delete Action */}
                    <td className="p-5 text-right">
                      <button
                        onClick={() => deleteHandler(student.id)}
                        className="p-3 text-gray-300 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-all"
                      >
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
