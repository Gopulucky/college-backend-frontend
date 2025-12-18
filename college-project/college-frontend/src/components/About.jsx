import { Target, Users, Lightbulb, Quote, CheckCircle2, Plus, Compass } from "lucide-react";
import pencilImage from "../assets/images/acumen-pencil.png";

export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 py-32 overflow-hidden">
      
      {/* =========================================
          1. BACKGROUND ATMOSPHERE
      ========================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* =========================================
          2. SOLID WHITE WATERMARK
      ========================================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[25vw] font-black text-white opacity-10 leading-none uppercase tracking-tighter">
          ORIGIN
        </h1>
      </div>

      {/* =========================================
          3. MAIN CONTENT
      ========================================= */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* =======================
              LEFT COLUMN: BLUEPRINT IMAGE
          ======================= */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-end pr-0 lg:pr-10">
            
            <div className="relative w-full max-w-sm group">
              
              {/* 1. The Blueprint Grid Box Behind */}
              <div className="absolute inset-0 border border-slate-700 bg-slate-900/50 rounded-lg transform rotate-6 scale-95 z-0 transition-transform duration-700 group-hover:rotate-3"></div>
              <div className="absolute inset-0 border border-dashed border-slate-600 rounded-lg transform -rotate-3 z-0 transition-transform duration-700 group-hover:-rotate-1"></div>

              {/* 2. The Main Framing Box */}
              <div className="relative z-10 bg-slate-950/60 backdrop-blur-md border border-slate-700 p-8 rounded-sm shadow-2xl">
                
                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-amber-500 -mt-1 -ml-1"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-amber-500 -mt-1 -mr-1"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-amber-500 -mb-1 -ml-1"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-amber-500 -mb-1 -mr-1"></div>

                {/* Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full"></div>

                {/* The Image */}
                <img
                  src={pencilImage}
                  alt="Acumen Structure"
                  className="relative z-20 w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 transition-transform duration-500"
                />

                {/* Technical Markers */}
                <div className="absolute top-1/2 -left-3 -translate-y-1/2 flex flex-col gap-1">
                   <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                   <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                   <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                </div>
                <Plus className="absolute top-4 right-4 w-4 h-4 text-slate-600 opacity-50" />
                <Plus className="absolute bottom-4 left-4 w-4 h-4 text-slate-600 opacity-50" />

              </div>

              {/* 3. The "Spec Tag" Floating Badge */}
              <div className="absolute -bottom-6 -left-6 z-30 bg-amber-500 text-slate-900 px-5 py-3 shadow-xl flex items-center gap-3 rounded-br-2xl">
                 <div className="text-right leading-none">
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Since</p>
                    <p className="text-xl font-black">2018</p>
                 </div>
                 <div className="h-8 w-[1px] bg-slate-900/20"></div>
                 <div className="leading-none">
                    <p className="text-xl font-black">100%</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Focus</p>
                 </div>
              </div>

            </div>
          </div>

          {/* =======================
              RIGHT COLUMN: TEXT CONTENT
          ======================= */}
          <div className="order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-lg">
              <Compass className="w-4 h-4" /> The Blueprint of Success
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Forging <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                Academic Excellence
              </span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-10 border-l-2 border-slate-800 pl-6">
              Education is not just about filling a bucket, but lighting a fire. 
              At Acumen, we combine the rigors of old-school discipline with modern 
              teaching methodologies to create a unique learning ecosystem.
            </p>

            {/* Premium Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <DarkFeature title="Structured Prep" desc="IIT-JEE & NEET focused curriculum." icon={<Target className="w-5 h-5" />} />
              <DarkFeature title="Top Tier Faculty" desc="Mentors from IITs & NITs." icon={<Users className="w-5 h-5" />} />
              <DarkFeature title="Personal Attention" desc="Small batches, big results." icon={<Lightbulb className="w-5 h-5" />} />
              <DarkFeature title="Holistic Growth" desc="Building character & confidence." icon={<CheckCircle2 className="w-5 h-5" />} />
            </div>

            {/* Quote Section */}
            <div className="pt-8 border-t border-white/10 flex gap-4 items-start">
              <div className="bg-slate-800 p-2 rounded-lg">
                <Quote className="w-6 h-6 text-indigo-400 fill-current" />
              </div>
              <div>
                <p className="italic text-slate-300 font-medium leading-relaxed">
                  "The wonder of teaching is watching caterpillars become butterflies."
                </p>
                <p className="text-xs text-amber-500 font-bold mt-2 uppercase tracking-widest">
                  — The Acumen Way
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

/* --- Helper Component: Premium Dark Feature --- */
function DarkFeature({ title, desc, icon }) {
  return (
    <div className="bg-slate-900/50 p-5 border border-white/5 hover:border-amber-500/50 hover:bg-slate-900 transition-all duration-300 rounded-xl group hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-amber-500 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h4 className="font-bold text-white group-hover:text-amber-200 transition-colors">{title}</h4>
      </div>
      <p className="text-sm text-slate-400 pl-8 group-hover:text-slate-300 transition-colors">{desc}</p>
    </div>
  );
}