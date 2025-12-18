import { GraduationCap, BookOpen, Award, Users, Star, Sparkles } from "lucide-react";

// Import images
import sandeepImg from "../assets/images/sandeep sir.png"; 
import shravanImg from "../assets/images/shravan sir.png";

export default function Faculty() {
  const facultyMembers = [
    { name: "Mr. Koneti Sreenivasulu", initials: "KS", image: null, subject: "Mathematics", color: "amber", qualifications: ["IIT Bombay (CSE)", "AIR 34"] },
    { name: "Mr. Sandeep Mukkala", initials: "SM", image: sandeepImg, subject: "Physics", color: "blue", qualifications: ["NIT Warangal (B.Tech)", "AIR 568 – JEE 2005"] },
    { name: "Mr. Sudhakar", initials: "S", image: null, subject: "Chemistry", color: "emerald", qualifications: ["IIT Graduate", "Senior Faculty"] },
    { name: "Dr. R. Shravan Kumar", initials: "RSK", image: shravanImg, subject: "Zoology", color: "purple", qualifications: ["MBBS (KMC)", "M.S. (GMC)"] },
  ];

  return (
    <section id="faculty" className="relative bg-slate-950 py-32 overflow-hidden">
      
      {/* 1. ATMOSPHERE */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* 2. SOLID WHITE WATERMARK */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[20vw] font-black text-white opacity-10 leading-none uppercase tracking-tighter">
          MASTERS
        </h1>
      </div>

      {/* 3. CONTENT */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-lg">
            <Users className="w-4 h-4" /> The Masters' Circle
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            Learn from the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Architects of Success.</span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {facultyMembers.map((member, index) => (
            <PremiumFacultyCard key={index} data={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PremiumFacultyCard({ data }) {
  const themes = {
    amber:   { border: "group-hover:border-amber-500/50", text: "text-amber-400", bg: "bg-amber-500", glow: "from-amber-500/20" },
    blue:    { border: "group-hover:border-blue-500/50", text: "text-blue-400", bg: "bg-blue-500", glow: "from-blue-500/20" },
    emerald: { border: "group-hover:border-emerald-500/50", text: "text-emerald-400", bg: "bg-emerald-500", glow: "from-emerald-500/20" },
    purple:  { border: "group-hover:border-purple-500/50", text: "text-purple-400", bg: "bg-purple-500", glow: "from-purple-500/20" },
  };
  const theme = themes[data.color];

  return (
    <div className={`group relative bg-slate-900 rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${theme.border}`}>
      <div className={`absolute inset-0 bg-gradient-to-b ${theme.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      <div className="relative z-10 p-6 flex flex-col items-center h-full">
        <div className="relative mb-6">
          <div className={`absolute -inset-2 rounded-full border border-dashed border-white/20 group-hover:border-${data.color}-500/50 group-hover:rotate-180 transition-all duration-700`}></div>
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-slate-800 shadow-xl relative bg-slate-800">
            {data.image ? (
              <img src={data.image} alt={data.name} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" />
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-slate-800 text-slate-600 font-black text-3xl group-hover:text-white transition-colors">{data.initials}</div>
            )}
          </div>
          <div className="absolute -bottom-1 -right-1 bg-slate-900 p-1.5 rounded-full border border-slate-700 group-hover:border-white/20 transition-colors">
             <Star className={`w-4 h-4 ${theme.text} fill-current`} />
          </div>
        </div>
        <div className="text-center w-full">
          <h3 className="text-lg font-bold text-white mb-1 group-hover:scale-105 transition-transform duration-300">{data.name}</h3>
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 ${theme.text} text-xs font-bold uppercase tracking-wider mb-6`}>
            <BookOpen className="w-3 h-3" /> {data.subject}
          </div>
          <div className="space-y-3 w-full border-t border-white/5 pt-4">
            {data.qualifications.map((qual, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                <div className={`p-1.5 rounded-lg bg-white/5 ${theme.text}`}>
                  {idx === 0 ? <GraduationCap className="w-3.5 h-3.5" /> : <Award className="w-3.5 h-3.5" />}
                </div>
                <span className="truncate font-medium">{qual}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 w-full h-1 ${theme.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
    </div>
  );
}