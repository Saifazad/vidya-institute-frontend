import React, { useState } from "react";
import Container from "../layouts/Container";
import { api } from "..//service/api";
import {
  Upload,
  User,
  Phone,
  Mail,
  BookOpen,
  Loader2,
  CheckCircle,
  FileText,
} from "lucide-react";

export default function Admission() {
  const [loading, setLoading] = useState(false);

  // States for file feedback
  const [previews, setPreviews] = useState({ photo: null });
  const [fileNames, setFileNames] = useState({ photo: "", document: "" });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const file = files[0];

      // File ka naam save karein
      setFileNames((prev) => ({ ...prev, [name]: file.name }));

      // Agar photo hai toh preview generate karein
      if (name === "photo") {
        const reader = new FileReader();
        reader.onload = (e) => setPreviews({ photo: e.target.result });
        reader.readAsDataURL(file);
      }
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await api.post("/admission", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200 || response.status === 201) {
        alert("🎉 Admission Form Submitted Successfully!");
        e.target.reset();
        setPreviews({ photo: null });
        setFileNames({ photo: "", document: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Error: Form submit nahi ho paya.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="max-w-3xl mx-auto my-12 bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
        {/* Header Section */}
        <div className="bg-[#002e5b] p-8 text-center">
          <h2 className="text-3xl font-bold text-white uppercase tracking-wide">
            Online Admission Form
          </h2>
          <p className="text-blue-200 mt-2 font-medium italic">
            Academic Session 2025-26
          </p>
        </div>

        <form onSubmit={submitHandler} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 uppercase">
                <User size={16} className="text-red-600" /> Full Name
              </label>
              <input
                name="name"
                required
                placeholder="Ex: Rahul Kumar"
                className="w-full border-b-2 border-gray-200 p-2 focus:border-red-600 outline-none transition-all"
              />
            </div>

            {/* Mobile */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 uppercase">
                <Phone size={16} className="text-red-600" /> Mobile Number
              </label>
              <input
                name="phone"
                required
                type="tel"
                placeholder="10 Digit Number"
                className="w-full border-b-2 border-gray-200 p-2 focus:border-red-600 outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 uppercase">
                <Mail size={16} className="text-red-600" /> Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full border-b-2 border-gray-200 p-2 focus:border-red-600 outline-none transition-all"
              />
            </div>

            {/* Course */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 uppercase">
                <BookOpen size={16} className="text-red-600" /> Select Course
              </label>
              <select
                name="course"
                required
                className="w-full border-b-2 border-gray-200 p-2 focus:border-red-600 outline-none bg-transparent"
              >
                <option value="">Choose Course</option>
                <option value="ANM/GNM">ANM/GNM (Nursing)</option>
                <option value="BCA">BCA</option>
                <option value="BBA">BBA</option>
                <option value="DMLT">DMLT</option>
                <option value="Safety">Safety Course</option>
              </select>
            </div>
          </div>

          {/* File Uploads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* Photo Upload with Preview */}
            <div
              className={`relative p-6 border-2 border-dashed rounded-xl flex flex-col items-center justify-center transition-all ${
                fileNames.photo
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 hover:border-red-400"
              }`}
            >
              <label className="cursor-pointer flex flex-col items-center">
                {previews.photo ? (
                  <img
                    src={previews.photo}
                    alt="Preview"
                    className="h-20 w-20 object-cover rounded-full mb-2 border-2 border-green-500"
                  />
                ) : (
                  <Upload size={32} className="text-gray-400 mb-2" />
                )}
                <span className="text-xs font-bold text-gray-600 uppercase">
                  {fileNames.photo || "Upload Photo"}
                </span>
                <input
                  name="photo"
                  type="file"
                  required
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
              {fileNames.photo && (
                <CheckCircle
                  size={16}
                  className="text-green-600 absolute top-2 right-2"
                />
              )}
            </div>

            {/* Document Upload */}
            <div
              className={`relative p-6 border-2 border-dashed rounded-xl flex flex-col items-center justify-center transition-all ${
                fileNames.document
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 hover:border-red-400"
              }`}
            >
              <label className="cursor-pointer flex flex-col items-center">
                <FileText
                  size={32}
                  className={
                    fileNames.document
                      ? "text-green-500 mb-2"
                      : "text-gray-400 mb-2"
                  }
                />
                <span className="text-xs font-bold text-gray-600 uppercase text-center">
                  {fileNames.document || "Upload Aadhaar/Doc"}
                </span>
                <input
                  name="document"
                  type="file"
                  required
                  className="hidden"
                  accept=".pdf,image/*"
                  onChange={handleFileChange}
                />
              </label>
              {fileNames.document && (
                <CheckCircle
                  size={16}
                  className="text-green-600 absolute top-2 right-2"
                />
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            disabled={loading}
            className={`w-full py-4 rounded-xl font-black text-white text-xl shadow-xl transition-all flex items-center justify-center gap-3 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 hover:shadow-green-200 active:scale-95"
            }`}
          >
            {loading ? <Loader2 className="animate-spin" /> : null}
            {loading ? "SAVING DATA..." : "SUBMIT APPLICATION"}
          </button>
        </form>
      </div>
    </Container>
  );
}
