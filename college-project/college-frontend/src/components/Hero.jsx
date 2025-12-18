import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Star, Sparkles, GraduationCap } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Import images
import heroImg1 from "../assets/images/building-1.webp";
import heroImg2 from "../assets/images/building-2.webp";

const heroImages = [heroImg1, heroImg2];

export default function Hero() {
  return (
    <section className="relative bg-slate-950 flex justify-center overflow-hidden min-h-[90vh]">
      
      {/* ==================================================================
          1. BACKGROUND ATMOSPHERE (Bottom Layer)
      ================================================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Indigo Glow (Left) */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px] opacity-40"></div>
        {/* Amber/Gold Glow (Right) */}
        <div className="absolute top-[20%] right-[0%] w-[40%] h-[40%] bg-amber-500/10 rounded-full blur-[120px] opacity-40"></div>
        {/* Grainy Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* ==================================================================
          2. BRAND WATERMARK: "ACUMEN" (Middle Layer)
      ================================================================== */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        {/* - Z-Index: 0 (Sits on top of background, behind content)
            - Opacity: 10% (Clearly visible solid white)
        */}
        <h1 className="text-[23vw] font-black text-white opacity-10 leading-none uppercase tracking-tighter">
          ACUMEN
        </h1>
      </div>

      {/* ==================================================================
          3. MAIN CONTENT (Top Layer)
      ================================================================== */}
      <div className="w-full max-w-7xl px-6 py-20 md:py-32 relative z-10 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* --- LEFT CONTENT --- */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            
            {/* Admissions Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] text-xs font-bold text-amber-400 mb-8 mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-4 duration-700 uppercase tracking-wider">
              <Sparkles className="w-3 h-3 fill-current" />
              <span>Admissions Open 2025-26</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight text-white tracking-tight mb-6 drop-shadow-2xl">
              Shaping Future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-300">
                Top Rankers.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 font-medium">
              Acumen Junior College provides focused preparation for IIT-JEE, NEET, 
              and competitive examinations through experienced faculty and a 
              proven curriculum.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/class/login"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                Student Portal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/admin/login"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-md text-slate-300 font-semibold rounded-2xl border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
              >
                <ShieldCheck className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                Admin Access
              </Link>
            </div>

            {/* Stats Row */}
            <div className="mt-14 flex items-center justify-center lg:justify-start gap-10 border-t border-white/10 pt-10 lg:mr-12">
              <StatItem value="15+" label="Years Exp." />
              <div className="w-px h-12 bg-white/10"></div>
              <StatItem value="5k+" label="Students" />
              <div className="w-px h-12 bg-white/10"></div>
              <StatItem value="100%" label="Commitment" />
            </div>
          </div>

          {/* --- RIGHT IMAGE SLIDER --- */}
          <div className="relative hidden md:block h-[600px] w-full pl-10">
            
            {/* The Swiper */}
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50 border border-white/10 relative z-10"
            >
              {heroImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full relative group">
                    <img
                      src={image}
                      alt={`Acumen Campus View ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-[10s] ease-linear group-hover:scale-110"
                      onError={(e) => {e.target.src = "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop"}}
                    />
                    {/* Gradient Overlay for blending */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Floating Glass Card: Pass Percentage */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              <div className="bg-emerald-500/20 p-3 rounded-full border border-emerald-500/30">
                <GraduationCap className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pass Percentage</p>
                <p className="text-2xl font-black text-white leading-none mt-1">98.5%</p>
              </div>
            </div>

            {/* Floating Glass Card: Ratings */}
            <div className="absolute top-10 -right-6 z-20 bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/10 text-center animate-in fade-in slide-in-from-top-8 duration-1000 delay-300">
               <div className="flex gap-1 text-amber-400 justify-center">
                 {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
               </div>
               <p className="text-[10px] font-bold text-slate-300 mt-2 uppercase tracking-wider">Top Rated Faculty</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Helper for Stats
function StatItem({ value, label }) {
  return (
    <div className="text-left">
      <p className="text-4xl font-black text-white tracking-tight">{value}</p>
      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">{label}</p>
    </div>
  );
}