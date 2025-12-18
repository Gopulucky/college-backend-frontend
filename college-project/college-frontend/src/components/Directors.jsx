import { Quote, GraduationCap, Award, Star, Sparkles } from "lucide-react";
import director1 from "../assets/images/shravan sir.png";
import director2 from "../assets/images/sandeep sir.png";

export default function Directors() {
  return (
    <section id="directors" className="relative bg-slate-950 py-32 overflow-hidden">
      
      {/* 1. ATMOSPHERE */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] -translate-x-1/2 opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-[100px] translate-x-1/2 opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* 2. SOLID WHITE WATERMARK */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden pr-10">
        <h1 className="text-[20vw] font-black text-white opacity-10 leading-none uppercase tracking-tighter">
          VISION
        </h1>
      </div>

      {/* 3. CONTENT */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-lg">
            <Star className="w-4 h-4 fill-current" />
            The Visionaries
          </div>
          <div className="flex flex-col md:flex-row gap-8 justify-between items-end">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-2xl">
              Guiding Minds Behind <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                The Excellence.
              </span>
            </h2>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <DirectorCard 
            image={director1}
            name="Dr. R. Shravan Kumar"
            role="Director – Medical Academy"
            education={["MBBS (KMC)", "M.S. (GMC)"]}
            quote="We don't just create doctors; we mold compassionate healers who understand the value of discipline."
            themeColor="emerald"
          />
          <DirectorCard 
            image={director2}
            name="Mr. Sandeep Mukkala"
            role="Director – Physics & IIT-JEE"
            education={["NIT Warangal (B.Tech)", "AIR 568 (JEE 2005)"]}
            quote="Physics is not about formulas, but understanding the universe. We teach students to think like engineers."
            themeColor="indigo"
          />
        </div>
      </div>
    </section>
  );
}

function DirectorCard({ image, name, role, education, quote, themeColor }) {
  const themes = {
    emerald: { border: "group-hover:border-emerald-500/50", text: "text-emerald-400", bg: "bg-emerald-500", gradient: "from-emerald-500/10" },
    indigo: { border: "group-hover:border-indigo-500/50", text: "text-indigo-400", bg: "bg-indigo-500", gradient: "from-indigo-500/10" }
  };
  const theme = themes[themeColor];

  return (
    <div className={`group relative bg-slate-900 rounded-[2.5rem] p-8 md:p-10 border border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${theme.border}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 ${theme.text} text-xs font-bold uppercase tracking-wider`}>
            <Award className="w-3.5 h-3.5" /> {role}
          </div>
          <Sparkles className={`w-5 h-5 ${theme.text} opacity-50 group-hover:opacity-100 transition-opacity`} />
        </div>
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start mb-8">
          <div className="relative shrink-0">
             <div className="w-32 h-32 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-slate-800 shadow-2xl relative z-10 bg-slate-800">
               <img src={image} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" />
             </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:tracking-wide transition-all duration-300">{name}</h3>
            <div className="space-y-2">
              {education.map((edu, i) => (
                <div key={i} className="flex items-center justify-center sm:justify-start gap-2 text-sm text-slate-400">
                   <GraduationCap className={`w-4 h-4 ${theme.text}`} /> <span>{edu}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-auto relative bg-slate-950/50 rounded-2xl p-6 border border-white/5 group-hover:border-white/10 transition-colors">
           <Quote className={`absolute -top-3 left-6 w-8 h-8 ${theme.bg} text-slate-900 p-1.5 rounded-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300`} />
           <p className="text-slate-300 italic leading-relaxed pt-2">"{quote}"</p>
        </div>
      </div>
    </div>
  );
}