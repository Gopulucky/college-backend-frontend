import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Eye, EyeOff, Loader2, LogIn, AlertCircle, ArrowRight, Sparkles } from "lucide-react";
import logo from "../assets/logos/logo.jpeg"; // Ensure path is correct

export default function ClassLogin() {
  const [classCode, setClassCode] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/class/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ class_code: classCode, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid credentials. Please try again.");
        setLoading(false);
        return;
      }

      localStorage.setItem("classToken", data.token);
      navigate("/class/dashboard");
    } catch {
      setError("Unable to connect to the server.");
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-slate-200 opacity-20" style={{ backgroundImage: 'radial-gradient(#4f46e5 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-200/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/60 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      {/* MAIN CARD CONTAINER */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10 min-h-[600px]">
        
        {/* LEFT PANEL: BRANDING (Dark Theme) */}
        <div className="md:w-1/2 bg-slate-900 relative p-12 flex flex-col justify-between overflow-hidden text-white">
          
          {/* Watermark in background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vh] font-black text-slate-800 leading-none select-none pointer-events-none -rotate-12 whitespace-nowrap opacity-50">
            ACUMEN
          </div>
          
          {/* Top Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <img src={logo} alt="Logo" className="w-10 h-10 rounded-full bg-white p-1" />
              <span className="font-bold text-xl tracking-tight">ACUMEN</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Student <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
                Portal
              </span>
            </h2>
            <p className="text-slate-400 text-lg">
              Access your marks, attendance, and academic progress reports.
            </p>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10 mt-12 md:mt-0">
             <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4">
                <div className="bg-indigo-500 rounded-full p-2">
                   <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                   <p className="text-sm font-bold text-white">Latest Update</p>
                   <p className="text-xs text-indigo-200">Term 1 Results are now live.</p>
                </div>
             </div>
          </div>
        </div>

        {/* RIGHT PANEL: FORM (Light Theme) */}
        <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white relative">
          
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900">Welcome Back!</h3>
            <p className="text-slate-500 mt-2">Please sign in to continue.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Class Code */}
            <div className="space-y-2 group">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Class Code</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="e.g. CS-2024-A"
                  value={classCode}
                  onChange={(e) => setClassCode(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-slate-900 font-medium placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2 group">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-slate-900 font-medium placeholder:text-slate-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-3 p-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span className="font-medium">{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              disabled={loading}
              className="w-full bg-slate-900 hover:bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-slate-900/20 hover:shadow-indigo-600/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:transform-none"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Login <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}