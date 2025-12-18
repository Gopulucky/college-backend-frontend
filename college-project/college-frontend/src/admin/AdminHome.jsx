import { useNavigate } from "react-router-dom";
import { Users, FileText, ArrowRight, TrendingUp, Sparkles, Activity } from "lucide-react";

export default function AdminHome() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      
      {/* =======================
          1. WELCOME BANNER
      ======================= */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 md:p-12 text-white shadow-2xl">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-indigo-500/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-80 h-80 bg-emerald-500/20 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 text-indigo-400 font-bold uppercase tracking-wider text-xs mb-2">
            <Sparkles className="w-4 h-4" /> Admin Dashboard
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Welcome back, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              Administrator.
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl text-lg">
            Here is an overview of the institute's performance today. You have full control over admissions and academic records.
          </p>
        </div>
      </div>

      {/* =======================
          2. ACTION CARDS
      ======================= */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* ENQUIRIES CARD (Premium Dark Style) */}
        <div 
          onClick={() => navigate("/admin/enquiries")}
          className="group relative overflow-hidden bg-white hover:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-slate-800 transition-all duration-300 cursor-pointer hover:-translate-y-1"
        >
          {/* Hover Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start mb-8">
               <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-lg">
                 <Users className="w-7 h-7" />
               </div>
               <div className="p-2 rounded-full bg-slate-50 group-hover:bg-white/10 text-slate-400 group-hover:text-white transition-colors">
                 <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
               </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors">View Enquiries</h3>
              <p className="text-slate-500 group-hover:text-slate-400 mt-2 transition-colors">
                Manage student admissions, review incoming messages, and track follow-ups.
              </p>
            </div>
          </div>
        </div>

        {/* MARKS CARD (Premium Dark Style) */}
        <div 
          onClick={() => navigate("/admin/marks")}
          className="group relative overflow-hidden bg-white hover:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-slate-800 transition-all duration-300 cursor-pointer hover:-translate-y-1"
        >
          {/* Hover Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start mb-8">
               <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-lg">
                 <FileText className="w-7 h-7" />
               </div>
               <div className="p-2 rounded-full bg-slate-50 group-hover:bg-white/10 text-slate-400 group-hover:text-white transition-colors">
                 <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
               </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors">Manage Marks</h3>
              <p className="text-slate-500 group-hover:text-slate-400 mt-2 transition-colors">
                Upload student results, edit academic records, and publish report cards.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* =======================
          3. QUICK STATS (Visual Filler)
      ======================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatBadge label="System Status" value="Online" color="text-emerald-500" />
        <StatBadge label="Total Classes" value="Active" color="text-indigo-500" />
        <StatBadge label="Server Load" value="Normal" color="text-blue-500" />
        <StatBadge label="Last Login" value="Just Now" color="text-slate-500" />
      </div>

    </div>
  );
}

function StatBadge({ label, value, color }) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
      <div className={`w-2 h-2 rounded-full ${color.replace('text', 'bg')} animate-pulse`}></div>
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{label}</p>
        <p className={`text-sm font-bold ${color}`}>{value}</p>
      </div>
    </div>
  );
}