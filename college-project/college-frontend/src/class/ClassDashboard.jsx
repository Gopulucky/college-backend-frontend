import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Trophy, Calculator, Users, AlertCircle, LayoutDashboard, BookOpen, Calendar, Menu, Bell, User, Search, Home } from "lucide-react";
import logo from "../assets/logos/logo.jpeg"; 

export default function ClassDashboard() {
  const [marks, setMarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("classToken");
      if (!token) { navigate("/class/login", { replace: true }); return; }

      try {
        const res = await fetch("http://localhost:5000/api/class/marks", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to fetch data");
        let data = await res.json();
        setMarks(Array.isArray(data) ? data.sort((a, b) => b.total_marks - a.total_marks) : []);
      } catch (err) {
        setError("Could not load class data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("classToken");
    navigate("/class/login", { replace: true });
  };

  // ... (Keep existing stats calculation logic here) ...
  const stats = useMemo(() => {
    if (!marks.length) return null;
    const totalScore = marks.reduce((acc, curr) => acc + curr.total_marks, 0);
    const avgScore = Math.round(totalScore / marks.length);
    const topScorer = marks[0]; 
    return { count: marks.length, avg: avgScore, top: topScorer.name, topScore: topScorer.total_marks };
  }, [marks]);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div></div>;

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      
      {/* SIDEBAR */}
      <aside className={`fixed inset-y-0 left-0 z-40 bg-slate-900 text-white transition-all duration-300 border-r border-slate-800 ${sidebarOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full lg:translate-x-0 lg:w-20"}`}>
        <div className="h-full flex flex-col">
          <div className="h-20 flex items-center justify-center border-b border-slate-800">
             <img src={logo} alt="Logo" className="w-10 h-10 rounded-full bg-white p-0.5" />
             <span className={`ml-3 font-bold text-lg tracking-tight ${sidebarOpen ? "opacity-100" : "hidden lg:opacity-0"}`}>ACUMEN</span>
          </div>

          <nav className="flex-1 px-3 py-6 space-y-2">
            {/* 🟢 NEW: Home Button */}
            <button onClick={() => navigate("/")} className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all">
               <Home /> {sidebarOpen && <span className="font-medium text-sm">Website Home</span>}
            </button>
            <div className="my-2 border-t border-slate-800"></div>

            <SidebarItem icon={<LayoutDashboard />} label="Dashboard" active collapsed={!sidebarOpen} />
            <SidebarItem icon={<BookOpen />} label="Subjects" collapsed={!sidebarOpen} />
            <SidebarItem icon={<Calendar />} label="Attendance" collapsed={!sidebarOpen} />
          </nav>

          <div className="p-4 border-t border-slate-800">
            <button onClick={handleLogout} className={`flex items-center gap-3 w-full p-3 rounded-xl hover:bg-red-500/10 hover:text-red-400 transition-colors ${!sidebarOpen && "justify-center"}`}>
              <LogOut className="w-5 h-5" />
              <span className={`${sidebarOpen ? "block" : "hidden lg:hidden"}`}>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "lg:ml-20"}`}>
        <header className="h-20 bg-white border-b border-slate-200 sticky top-0 z-30 px-6 flex items-center justify-between shadow-sm">
           <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-slate-100 rounded-lg lg:hidden"><Menu className="w-6 h-6" /></button>
              <h1 className="text-xl font-bold text-slate-800">Class Dashboard</h1>
           </div>
           <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold border border-indigo-200"><User className="w-5 h-5" /></div>
           </div>
        </header>

        {/* ... (Keep your existing stats and table content here) ... */}
        <div className="p-6 md:p-8 max-w-7xl mx-auto">
          {error ? <div className="bg-red-50 text-red-600 p-4 rounded-xl flex gap-2"><AlertCircle /> {error}</div> : (
             <>
               {stats && (
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                   <StatCard label="Total Students" value={stats.count} icon={<Users className="w-6 h-6 text-white" />} color="bg-blue-500" />
                   <StatCard label="Class Average" value={stats.avg + "%"} icon={<Calculator className="w-6 h-6 text-white" />} color="bg-emerald-500" />
                   <StatCard label="Top Performer" value={stats.top} subValue={`${stats.topScore} Marks`} icon={<Trophy className="w-6 h-6 text-white" />} color="bg-amber-500" />
                 </div>
               )}
               {/* Table Code omitted for brevity, keep what you had */}
               <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                 <h2 className="text-lg font-bold mb-4">Student Marks</h2>
                 {/* ... Table logic ... */}
                 {marks.length > 0 ? (
                    <table className="w-full text-left">
                       <thead className="bg-slate-50 text-xs uppercase text-slate-500 font-bold">
                         <tr><th className="p-4">Rank</th><th className="p-4">Name</th><th className="p-4 text-right">Total</th></tr>
                       </thead>
                       <tbody className="divide-y divide-slate-100">
                         {marks.map((m, i) => (
                           <tr key={i}><td className="p-4">#{i+1}</td><td className="p-4 font-bold">{m.name}</td><td className="p-4 text-right">{m.total_marks}</td></tr>
                         ))}
                       </tbody>
                    </table>
                 ) : <p className="text-slate-500">No marks uploaded yet.</p>}
               </div>
             </>
          )}
        </div>
      </main>
    </div>
  );
}

// Helpers
function SidebarItem({ icon, label, active, collapsed }) {
  return (
    <button className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all ${active ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"} ${collapsed ? "justify-center" : ""}`}>
      <div>{icon}</div>{!collapsed && <span className="font-medium text-sm">{label}</span>}
    </button>
  );
}
function StatCard({ label, value, subValue, icon, color }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${color}`}>{icon}</div>
      <div><p className="text-slate-500 text-xs font-bold uppercase">{label}</p><h3 className="text-2xl font-black text-slate-900">{value}</h3>{subValue && <p className="text-xs text-slate-400 font-medium">{subValue}</p>}</div>
    </div>
  );
}