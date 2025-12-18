import { useState, useEffect } from "react";
import { Plus, Trash2, Users, Key, Loader2, ShieldCheck } from "lucide-react";

export default function ManageClasses() {
  const [classes, setClasses] = useState([]);
  const [className, setClassName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch classes on load
  const fetchClasses = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/classes");
      const data = await res.json();
      setClasses(data);
    } catch (err) {
      console.error("Error fetching classes");
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  // Handle Create
  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch("http://localhost:5000/api/admin/classes/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ className, password })
      });
      
      const data = await res.json();
      if (res.ok) {
        alert("Success: " + data.message);
        setClassName("");
        setPassword("");
        fetchClasses(); // Refresh list
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    if (!confirm("Are you sure? This will delete all students and marks for this class!")) return;
    
    await fetch(`http://localhost:5000/api/admin/classes/${id}`, { method: "DELETE" });
    fetchClasses();
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* LEFT: CREATE FORM */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Plus className="w-5 h-5 text-indigo-600"/> Create Class
            </h2>
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Class Login ID</label>
                <div className="relative mt-1">
                   <Users className="absolute left-3 top-3 w-5 h-5 text-slate-400"/>
                   <input 
                     type="text" 
                     placeholder="e.g. jee-adv-2026-b" 
                     value={className}
                     onChange={(e) => setClassName(e.target.value)}
                     className="w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                     required
                   />
                </div>
                <p className="text-[10px] text-slate-400 mt-1">This ID will be used for student login.</p>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Password</label>
                <div className="relative mt-1">
                   <Key className="absolute left-3 top-3 w-5 h-5 text-slate-400"/>
                   <input 
                     type="text" 
                     placeholder="Set a strong password" 
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     className="w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                     required
                   />
                </div>
              </div>

              <button disabled={loading} className="w-full bg-slate-900 text-white py-2 rounded-xl font-bold hover:bg-slate-800 transition-all flex justify-center">
                {loading ? <Loader2 className="animate-spin w-5 h-5"/> : "Create Class"}
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT: EXISTING CLASSES LIST */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
             <div className="p-6 border-b border-slate-100">
               <h2 className="text-xl font-bold text-slate-800">Existing Classes</h2>
             </div>
             <table className="w-full text-left">
               <thead className="bg-slate-50 text-xs font-bold text-slate-500 uppercase">
                 <tr>
                   <th className="p-4">ID</th>
                   <th className="p-4">Class Login ID</th>
                   <th className="p-4">Created At</th>
                   <th className="p-4 text-right">Action</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                 {classes.map((cls) => (
                   <tr key={cls.id} className="hover:bg-slate-50">
                     <td className="p-4 text-slate-400 text-sm">#{cls.id}</td>
                     <td className="p-4 font-bold text-slate-800 flex items-center gap-2">
                       <ShieldCheck className="w-4 h-4 text-emerald-500"/> {cls.login_id}
                     </td>
                     <td className="p-4 text-sm text-slate-500">{new Date(cls.created_at).toLocaleDateString()}</td>
                     <td className="p-4 text-right">
                       <button 
                         onClick={() => handleDelete(cls.id)}
                         className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                         title="Delete Class"
                       >
                         <Trash2 className="w-4 h-4"/>
                       </button>
                     </td>
                   </tr>
                 ))}
                 {classes.length === 0 && (
                   <tr>
                     <td colSpan="4" className="p-8 text-center text-slate-400">No classes found. Create one!</td>
                   </tr>
                 )}
               </tbody>
             </table>
          </div>
        </div>

      </div>
    </div>
  );
}