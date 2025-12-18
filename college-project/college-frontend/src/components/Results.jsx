import { Trophy, TrendingUp, Award, Star, ArrowUpRight, Zap, Crown } from "lucide-react";

// IMAGE IMPORTS
import result1 from "../assets/results/results-2022-2024.png"; 
import result2 from "../assets/results/results-2021-2023.png";   
import result3 from "../assets/results/results-2020-2022.png";  

export default function Results() {
  return (
    <section id="results" className="relative bg-slate-950 py-32 overflow-hidden">
      
      {/* =========================================
          1. BACKGROUND ATMOSPHERE
      ========================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[100px] translate-y-1/3 translate-x-1/3 opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* =========================================
          2. SOLID WHITE WATERMARK
      ========================================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[25vw] font-black text-white opacity-10 leading-none uppercase tracking-tighter">
          LEGACY
        </h1>
      </div>

      {/* =========================================
          3. MAIN CONTENT
      ========================================= */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-lg">
            <Crown className="w-4 h-4" />
            Hall of Excellence
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
            We Don't Just Teach.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              We Create Legends.
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Year after year, our students shatter records and redefine what's possible. 
            Here is the proof of our relentless pursuit of perfection.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24 border-y border-white/10 py-12 backdrop-blur-sm">
          <HoloStat number="45+" label="IIT / NIT / BITS" color="text-indigo-400" icon={<Award />} />
          <HoloStat number="60+" label="JEE Mains Qualified" color="text-teal-400" icon={<Zap />} />
          <HoloStat number="15+" label="Top Rankers" color="text-rose-400" icon={<Star />} />
          <HoloStat number="20+" label="Medical Seats" color="text-amber-400" icon={<Trophy />} />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Latest Batch Card */}
          <div className="lg:col-span-8 group relative bg-slate-900 rounded-[2rem] border border-white/10 overflow-hidden hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-100 transition-opacity"></div>
            
            <div className="flex flex-col md:flex-row h-full">
              <div className="p-10 md:p-12 flex flex-col justify-between relative z-10 md:w-1/2">
                <div>
                   <div className="flex items-center gap-3 mb-6">
                     <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_#f59e0b]"></span>
                     <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Latest Record Breaker</span>
                   </div>
                   <h3 className="text-4xl md:text-5xl font-black text-white mb-2">Batch <br/>2022-24</h3>
                   <div className="h-1 w-20 bg-amber-500 mb-6 mt-2"></div>
                   <p className="text-slate-400 text-lg leading-relaxed mb-8">
                     <strong className="text-white">45 out of 136</strong> students secured seats in India's Tier-1 colleges.
                   </p>
                </div>
                <button className="flex items-center gap-3 text-white font-bold group/btn w-max">
                  <span className="border-b border-amber-500 pb-1 group-hover/btn:border-white transition-colors">See Detailed Report</span>
                  <ArrowUpRight className="w-5 h-5 text-amber-500 group-hover/btn:text-white group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
              <div className="md:w-1/2 relative min-h-[300px] overflow-hidden">
                <img src={result1} alt="2024 Batch Results" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>
          </div>

          {/* Archive Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* 2023 Batch */}
            <div className="flex-1 bg-slate-900 rounded-[2rem] border border-white/10 p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
               <div className="relative z-10">
                 <h4 className="text-2xl font-bold text-white mb-2">Batch 2021-23</h4>
                 <div className="flex gap-4 items-end mt-4">
                    <div className="text-4xl font-black text-white">47%</div>
                    <div className="text-slate-500 text-xs font-bold uppercase mb-2">Selection<br/>Ratio</div>
                 </div>
                 <div className="mt-6 h-32 w-full rounded-xl overflow-hidden border border-white/10 relative">
                    <img src={result2} alt="2023 Batch" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                 </div>
               </div>
            </div>

            {/* 2022 Batch */}
            <div className="flex-1 bg-slate-900 rounded-[2rem] border border-white/10 p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
               <div className="relative z-10 flex items-center justify-between">
                 <div>
                   <h4 className="text-2xl font-bold text-white mb-1">Batch 2020-22</h4>
                   <p className="text-indigo-400 font-medium text-sm">Where it all began.</p>
                 </div>
                 <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <TrendingUp className="w-5 h-5 text-slate-400 group-hover:text-white" />
                 </div>
               </div>
               <div className="mt-6 pt-6 border-t border-white/5">
                 <div className="flex items-center gap-3">
                   <img src={result3} alt="2022 Batch" className="w-10 h-10 rounded-full object-cover border border-white/20" />
                   <div><p className="text-white font-bold text-sm">20+ Top Ranks</p></div>
                 </div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function HoloStat({ number, label, color, icon }) {
  return (
    <div className="text-center group p-4 rounded-2xl hover:bg-white/5 transition-colors">
      <div className={`mx-auto w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
        <div className={color}>{icon}</div>
      </div>
      <div className={`text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter group-hover:scale-105 transition-transform`}>{number}</div>
      <div className={`text-xs font-bold uppercase tracking-widest ${color} opacity-80`}>{label}</div>
    </div>
  );
}