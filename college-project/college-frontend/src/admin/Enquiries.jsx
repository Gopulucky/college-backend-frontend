import { useState, useEffect } from "react";
import { Loader2, Mail, Phone, Calendar, RefreshCcw, AlertCircle } from "lucide-react";

export default function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchEnquiries = () => {
    setLoading(true);
    // 🟢 Ensures we hit the exact API endpoint
    fetch("http://localhost:5000/api/enquiry") 
      .then(res => {
        if (!res.ok) throw new Error("Server error");
        return res.json();
      })
      .then(data => {
        console.log("Fetched Enquiries:", data); // Debug log
        setEnquiries(data);
        setError("");
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load data. Is backend running?");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  if (loading) return <div className="p-12 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-indigo-600" /></div>;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
         <h2 className="text-xl font-bold text-slate-800">Enquiries ({enquiries.length})</h2>
         <button onClick={fetchEnquiries} className="p-2 text-slate-400 hover:text-indigo-600 transition-colors" title="Refresh">
           <RefreshCcw className="w-5 h-5" />
         </button>
      </div>
      
      {error ? (
        <div className="p-8 text-center text-red-500 flex flex-col items-center gap-2">
          <AlertCircle /> {error}
        </div>
      ) : enquiries.length === 0 ? (
        <div className="p-12 text-center text-slate-400">No enquiries found. Submit one via the Contact form!</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500 font-bold border-b border-slate-200">
              <tr><th className="p-4">Date</th><th className="p-4">Name</th><th className="p-4">Course</th><th className="p-4">Message</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {enquiries.map((e) => (
                <tr key={e.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-xs text-slate-500 font-mono whitespace-nowrap">
                    <div className="flex items-center gap-2"><Calendar className="w-3 h-3"/> {new Date(e.created_at).toLocaleDateString()}</div>
                  </td>
                  <td className="p-4">
                    <p className="font-bold text-slate-800">{e.name}</p>
                    <div className="text-xs text-slate-500 flex flex-col gap-1 mt-1">
                      <span className="flex items-center gap-1"><Phone className="w-3 h-3"/> {e.phone}</span>
                      {e.email && <span className="flex items-center gap-1"><Mail className="w-3 h-3"/> {e.email}</span>}
                    </div>
                  </td>
                  <td className="p-4"><span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs font-bold border border-indigo-100">{e.course}</span></td>
                  <td className="p-4 text-sm text-slate-600 max-w-xs">{e.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}