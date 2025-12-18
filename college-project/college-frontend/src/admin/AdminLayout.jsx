import { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, FileText, LogOut, Menu, Shield, BookOpen, Home } from "lucide-react";
import logo from "../assets/logos/logo.jpeg"; 

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) navigate("/admin/login", { replace: true });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      
      {/* SIDEBAR */}
      <aside className={`fixed inset-y-0 left-0 z-40 bg-slate-950 text-white transition-all duration-300 border-r border-slate-900 ${sidebarOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full lg:translate-x-0 lg:w-20"}`}>
        <div className="h-full flex flex-col">
          <div className="h-20 flex items-center justify-center border-b border-slate-900">
             <img src={logo} alt="Logo" className="w-10 h-10 rounded-full bg-white p-0.5" />
             <span className={`ml-3 font-bold text-lg tracking-tight transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "hidden lg:opacity-0"}`}>ADMIN</span>
          </div>

          <nav className="flex-1 px-3 py-6 space-y-2">
            {/* 🟢 NEW: Back to Website Link */}
            <SidebarItem icon={<Home />} label="Website Home" path="/" active={false} collapsed={!sidebarOpen} navigate={navigate} />
            
            <div className="my-4 border-t border-slate-800"></div> {/* Separator */}

            <SidebarItem icon={<LayoutDashboard />} label="Dashboard" path="/admin/dashboard" active={location.pathname === "/admin/dashboard"} collapsed={!sidebarOpen} navigate={navigate} />
            <SidebarItem icon={<BookOpen />} label="Manage Classes" path="/admin/classes" active={location.pathname === "/admin/classes"} collapsed={!sidebarOpen} navigate={navigate} />
            <SidebarItem icon={<Users />} label="Enquiries" path="/admin/enquiries" active={location.pathname === "/admin/enquiries"} collapsed={!sidebarOpen} navigate={navigate} />
            <SidebarItem icon={<FileText />} label="Manage Marks" path="/admin/marks" active={location.pathname === "/admin/marks"} collapsed={!sidebarOpen} navigate={navigate} />
          </nav>

          <div className="p-4 border-t border-slate-900">
            <button onClick={handleLogout} className={`flex items-center gap-3 w-full p-3 rounded-xl hover:bg-red-500/10 hover:text-red-400 transition-colors group ${!sidebarOpen && "justify-center"}`}>
              <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
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
              <h1 className="text-xl font-bold text-slate-800">Administrator Panel</h1>
           </div>
           <div className="flex items-center gap-6">
             <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block"><p className="text-sm font-bold text-slate-900">Admin User</p><p className="text-xs text-slate-500">Super Access</p></div>
                <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg shadow-slate-900/20"><Shield className="w-5 h-5" /></div>
             </div>
             <button onClick={handleLogout} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all" title="Logout"><LogOut className="w-5 h-5" /></button>
           </div>
        </header>
        <div className="p-6 md:p-8 max-w-7xl mx-auto"><Outlet /></div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, path, active, collapsed, navigate }) {
  return (
    <button onClick={() => navigate(path)} className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group ${active ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" : "text-slate-400 hover:bg-white/5 hover:text-white"} ${collapsed ? "justify-center" : ""}`}>
      <div>{icon}</div>{!collapsed && <span className="font-medium text-sm">{label}</span>}
    </button>
  );
}