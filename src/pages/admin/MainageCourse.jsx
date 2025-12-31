import { useEffect, useState } from "react";
import { api } from "../../service/api";
import Container from "../../layouts/Container";
import Navbar from "../../components/Navbar";
import {
  PlusCircle,
  Edit3,
  Trash2,
  BookOpen,
  Clock,
  IndianRupee,
  Info,
  XCircle,
  Save,
  Loader2,
} from "lucide-react";

export default function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    duration: "",
    fee: "",
  });
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  const fetchCourses = async () => {
    try {
      const res = await api.get("/courses");
      setCourses(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!token) return alert("Admin login required");

    try {
      setLoading(true);
      const config = { headers: { Authorization: token } };

      if (editId) {
        await api.put(`/courses/${editId}`, form, config);
        alert("Success: Course updated");
      } else {
        await api.post("/courses", form, config);
        alert("Success: Course added");
      }

      cancelEdit();
      fetchCourses();
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const editCourse = (course) => {
    setForm({
      title: course.title,
      description: course.description,
      duration: course.duration,
      fee: course.fee,
    });
    setEditId(course.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setForm({ title: "", description: "", duration: "", fee: "" });
    setEditId(null);
  };

  const deleteCourse = async (id) => {
    if (
      !window.confirm(
        "Bhai, kya aap sach mein ye course delete karna chahte hain?"
      )
    )
      return;
    try {
      await api.delete(`/courses/${id}`, { headers: { Authorization: token } });
      fetchCourses();
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Container>
        <div className="m-4 p-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">
              Course Management
            </h1>
            <p className="text-gray-500 font-medium">
              Add, update or remove courses from the portal
            </p>
          </div>
          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-2xl font-bold text-sm">
            Total Courses: {courses.length}
          </div>
        </div>

        {/* ================= FORM SECTION ================= */}
        <div
          className={`transition-all duration-300 bg-white p-8 rounded-3xl shadow-xl border-2 ${
            editId ? "border-yellow-400" : "border-transparent"
          }`}
        >
          <div className="flex items-center gap-2 mb-6 text-gray-800">
            {editId ? (
              <Edit3 className="text-yellow-500" />
            ) : (
              <PlusCircle className="text-blue-600" />
            )}
            <h2 className="text-xl font-bold">
              {editId ? "Update Course Details" : "Add New Course"}
            </h2>
          </div>

          <form
            onSubmit={submit}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="space-y-1">
              <label className="text-xs font-black text-gray-400 uppercase ml-1">
                Course Title
              </label>
              <div className="relative">
                <BookOpen
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="e.g. BCA, GNM..."
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-black text-gray-400 uppercase ml-1">
                Duration
              </label>
              <div className="relative">
                <Clock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="e.g. 3 Years"
                  value={form.duration}
                  onChange={(e) =>
                    setForm({ ...form, duration: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-black text-gray-400 uppercase ml-1">
                Course Fee
              </label>
              <div className="relative">
                <IndianRupee
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="0.00"
                  value={form.fee}
                  onChange={(e) => setForm({ ...form, fee: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="md:col-span-3 space-y-1">
              <label className="text-xs font-black text-gray-400 uppercase ml-1">
                Course Description
              </label>
              <textarea
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none h-28 transition-all"
                placeholder="Describe what students will learn..."
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                required
              />
            </div>

            <div className="md:col-span-3 flex gap-3">
              <button
                disabled={loading}
                className={`flex-1 py-4 rounded-2xl font-bold text-white shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 ${
                  editId
                    ? "bg-yellow-500 hover:bg-yellow-600 shadow-yellow-100"
                    : "bg-blue-600 hover:bg-blue-700 shadow-blue-100"
                }`}
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Save size={20} />
                )}
                {editId ? "UPDATE COURSE NOW" : "PUBLISH COURSE"}
              </button>

              {editId && (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="px-6 bg-gray-200 text-gray-700 rounded-2xl font-bold hover:bg-gray-300 transition-all flex items-center gap-2"
                >
                  <XCircle size={20} /> CANCEL
                </button>
              )}
            </div>
          </form>
        </div>

        {/* ================= TABLE SECTION ================= */}
        <div className="mt-12 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-6 bg-gray-900 text-white flex items-center gap-2">
            <Info size={20} className="text-blue-400" />
            <h3 className="font-bold uppercase tracking-widest text-sm">
              Published Courses List
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 border-b border-gray-100">
                  <th className="p-5 text-xs font-black uppercase text-left">
                    Course Info
                  </th>
                  <th className="p-5 text-xs font-black uppercase text-center">
                    Duration
                  </th>
                  <th className="p-5 text-xs font-black uppercase text-center">
                    Fee Structure
                  </th>
                  <th className="p-5 text-xs font-black uppercase text-right">
                    Management
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {courses.length === 0 ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="p-20 text-center text-gray-400 font-medium italic"
                    >
                      Abhi tak koi course add nahi kiya gaya hai.
                    </td>
                  </tr>
                ) : (
                  courses.map((c) => (
                    <tr
                      key={c.id}
                      className="hover:bg-blue-50/30 transition-all group"
                    >
                      <td className="p-5">
                        <div className="font-black text-gray-800 text-lg uppercase">
                          {c.title}
                        </div>
                        <div className="text-xs text-gray-400 line-clamp-1 mt-1 max-w-xs">
                          {c.description}
                        </div>
                      </td>
                      <td className="p-5 text-center">
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg font-bold text-xs uppercase tracking-tighter">
                          {c.duration}
                        </span>
                      </td>
                      <td className="p-5 text-center font-black text-blue-600 text-lg">
                        ₹{Number(c.fee).toLocaleString("en-IN")}
                      </td>
                      <td className="p-5">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => editCourse(c)}
                            className="p-2.5 bg-yellow-50 text-yellow-600 rounded-xl hover:bg-yellow-500 hover:text-white transition-all shadow-sm"
                            title="Edit"
                          >
                            <Edit3 size={18} />
                          </button>
                          <button
                            onClick={() => deleteCourse(c.id)}
                            className="p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
}
