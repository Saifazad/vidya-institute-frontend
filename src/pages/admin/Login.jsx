import { useState } from "react";
import LogoImg from "../../assets/Logo.png";
import {
  Lock,
  User,
  GraduationCap,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";
import { api } from "../../service/api";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      const res = await api.post("/admin/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);
      window.location.href = "/admin/dashboard";
    } catch (error) {
      alert("Invalid Credentials! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex items-center justify-center p-4 font-sans">
      {/* Main Login Card */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
        {/* Header Section */}
        <div className="bg-[#002e5b] p-8 text-center relative">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-white">
            <ShieldCheck size={80} />
          </div>
          <div className="flex justify-center">
            <img
              src={LogoImg}
              alt="Vidya Group Of Insititue"
              width={120}
              className="rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-wide uppercase">
            Admin Portal
          </h2>
          <p className="text-blue-200 text-sm mt-1">
            Vidya Group of Institution
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={submit} className="p-8 space-y-6">
          {/* Username */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase px-1">
              Username
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#002e5b] transition-colors">
                <User size={18} />
              </div>
              <input
                name="username"
                type="text"
                required
                placeholder="Enter admin username"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#002e5b] focus:bg-white focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1">
            <div className="flex justify-between items-center px-1">
              <label className="text-xs font-bold text-gray-500 uppercase">
                Password
              </label>
              <button
                type="button"
                className="text-xs font-bold text-[#002e5b] hover:underline"
                onClick={() =>
                  alert(
                    "Please contact the System Administrator to reset your password."
                  )
                }
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#002e5b] transition-colors">
                <Lock size={18} />
              </div>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#002e5b] focus:bg-white focus:border-transparent outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-200 transform active:scale-[0.98] transition-all duration-200 uppercase tracking-widest flex justify-center items-center gap-2"
          >
            {loading ? "Authenticating..." : "Sign In to Dashboard"}
          </button>
        </form>

        {/* Footer */}
        <div className="px-8 py-4 bg-gray-50 text-center border-t border-gray-100">
          <p className="text-[10px] text-gray-400 uppercase font-medium tracking-widest">
            Secure Encryption Enabled &copy; 2025 Vidya IT Cell
          </p>
        </div>
      </div>
    </div>
  );
}
