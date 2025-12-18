import { useState } from "react";
import { UploadCloud, CheckCircle, FileText, Loader2, Key } from "lucide-react";
import Papa from "papaparse";

export default function Marks() {
  const [classLoginId, setClassLoginId] = useState(""); // Stores 'jee-adv-2025-a'
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState("idle"); 
  const [log, setLog] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setStatus("idle");
    setLog("");
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !classLoginId) return alert("Please enter Class Login ID and select a file.");

    setUploading(true);
    setLog("Reading CSV...");

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        const students = results.data;
        if (!students.length) {
          setLog("❌ CSV is empty.");
          setUploading(false);
          return;
        }

        setLog(`Found ${students.length} records. Uploading to class '${classLoginId}'...`);
        const token = localStorage.getItem("adminToken");
        let count = 0;
        let errors = 0;

        try {
          for (const student of students) {
            const payload = {
              class_login_id: classLoginId, // Sending 'jee-adv-2025-a'
              roll_no: student["Roll No"],
              name: student["Name"],
              maths: student["Maths"],
              physics: student["Physics"],
              chemistry: student["Chemistry"]
            };

            const res = await fetch("http://localhost:5000/api/admin/marks", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload)
            });

            if (res.ok) count++;
            else errors++;
          }

          if (count > 0) {
            setLog(`✅ Success! Uploaded ${count} students. (Errors: ${errors})`);
            setStatus("success");
          } else {
            setLog("❌ Failed. Check if Class Login ID exists.");
          }
          
        } catch (err) {
          setLog("❌ Network Error.");
        } finally {
          setUploading(false);
        }
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
         <h2 className="text-2xl font-bold text-slate-800 mb-6">Upload Marks</h2>
         
         {status === "success" ? (
           <div className="text-center py-8">
             <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-8 h-8"/></div>
             <h3 className="text-xl font-bold text-slate-900">Upload Complete!</h3>
             <p className="text-slate-500 mt-2">{log}</p>
             <button onClick={() => {setStatus("idle"); setFile(null); setLog("");}} className="mt-6 text-indigo-600 font-bold hover:underline">Upload Another</button>
           </div>
         ) : (
           <form onSubmit={handleUpload} className="space-y-6">
              
              {/* INPUT FOR CLASS LOGIN ID */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Target Class Login ID</label>
                <div className="relative">
                  <Key className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                  <input 
                    type="text"
                    placeholder="e.g. jee-adv-2025-a" 
                    value={classLoginId} 
                    onChange={(e) => setClassLoginId(e.target.value)} 
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 font-medium"
                    required
                  />
                </div>
                <p className="text-xs text-slate-400 mt-1">Enter the exact Login ID used by students.</p>
              </div>

              {/* FILE UPLOAD */}
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center relative hover:bg-slate-50">
                 <input type="file" accept=".csv" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                 <UploadCloud className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                 <p className="text-slate-600 font-medium">{file ? file.name : "Click to select CSV"}</p>
              </div>

              {log && <div className="bg-slate-100 p-3 rounded text-xs font-mono text-slate-600">{log}</div>}

              <button disabled={uploading} className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 flex justify-center">
                {uploading ? <Loader2 className="animate-spin" /> : "Upload Data"}
              </button>
           </form>
         )}
      </div>
    </div>
  );
}