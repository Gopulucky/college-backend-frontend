import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Eye, EyeOff, Loader2, AlertCircle, ShieldCheck, Sparkles } from "lucide-react";
import logo from "../assets/logos/logo.jpeg"; 

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // 🟢 SAFETY: If already logged in, go to dashboard immediately
  useEffect(() => {
    if (localStorage.getItem("adminToken")) {
      navigate("/admin/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid admin credentials");
        setLoading(false);
        return;
      }

      localStorage.setItem("adminToken", data.token);
      
      // 🟢 FIX: Use 'replace: true' to destroy Login from history
      navigate("/admin/dashboard", { replace: true });
      
    } catch {
      setError("Server connection failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* =========================================
          BACKGROUND DECOR (Premium Dark Style)
      ========================================= */}
      
      {/* 1. Large Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.02]">
        <h1 className="text-[20vw] font-black text-white leading-none tracking-tighter uppercase">
          ADMIN
        </h1>
      </div>

      {/* 2. Gradient Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[100px] translate-y-1/3 translate-x-1/4 pointer-events-none"></div>

      {/* 3. Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>


      {/* =========================================
          MAIN LOGIN CARD (Glassmorphism)
      ========================================= */}
      <div className="w-full max-w-md relative z-10">
        
        {/* Card Container */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
          
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-indigo-500 blur-lg opacity-40 rounded-full"></div>
              <img src={logo} alt="Logo" className="relative w-20 h-20 mx-auto rounded-full border-2 border-slate-700 shadow-xl" />
              <div className="absolute bottom-0 right-0 bg-emerald-500 text-slate-900 p-1.5 rounded-full border border-slate-800">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-white mt-6 tracking-tight">Admin Portal</h1>
            <p className="text-slate-400 mt-2 text-sm flex items-center justify-center gap-2">
              <Sparkles className="w-3 h-3 text-indigo-400" /> Secure Access Required
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Username Input */}
              <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-500 uppercase ml-1">Username</label>
                 <div className="relative group">
                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                     <User className="w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                   </div>
                   <input 
                     type="text" 
                     value={username} 
                     onChange={(e) => setUsername(e.target.value)} 
                     className="w-full pl-12 pr-4 py-4 bg-slate-950/50 border border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-white placeholder:text-slate-600 transition-all font-medium" 
                     placeholder="Enter Admin ID"
                     required 
                   />
                 </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-500 uppercase ml-1">Password</label>
                 <div className="relative group">
                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                     <Lock className="w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                   </div>
                   <input 
                     type={showPassword ? "text" : "password"} 
                     value={password} 
                     onChange={(e) => setPassword(e.target.value)} 
                     className="w-full pl-12 pr-12 py-4 bg-slate-950/50 border border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-white placeholder:text-slate-600 transition-all font-medium" 
                     placeholder="••••••••"
                     required 
                   />
                   <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)} 
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                   >
                     {showPassword ? <EyeOff className="w-5 h-5"/> : <Eye className="w-5 h-5"/>}
                   </button>
                 </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-3 p-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl animate-in fade-in slide-in-from-top-1">
                  <AlertCircle className="w-5 h-5 shrink-0"/> 
                  <span className="font-medium">{error}</span>
                </div>
              )}

              {/* Submit Button */}
              <button 
                disabled={loading} 
                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-indigo-900/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:transform-none"
              >
                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Sign In to Dashboard"}
              </button>
          </form>

        </div>
        
        {/* Footer Text */}
        <p className="text-center text-slate-600 text-xs mt-8">
          &copy; 2025 Acumen Institute. Authorized Personnel Only.
        </p>
      </div>

    </section>
  );
}