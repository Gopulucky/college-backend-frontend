import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight, GraduationCap } from "lucide-react";
import logo from "../assets/logos/logo.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* =========================================================
          DESKTOP: DARK FLOATING ISLAND
      ========================================================== */}
      <div className={`fixed z-50 left-0 right-0 flex justify-center transition-all duration-500 ease-out ${scrolled ? "top-4" : "top-6"}`}>
        
        <header 
          className={`
            relative backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 
            transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden
            bg-slate-950/90 text-white
            ${scrolled ? "w-[95%] md:w-[70%] py-2 px-6 rounded-2xl" : "w-[95%] md:w-[90%] py-5 px-10 rounded-full"}
          `}
        >
          {/* Subtle Internal Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-indigo-500/5 blur-xl pointer-events-none"></div>

          <div className="relative z-10 flex items-center justify-between">

            {/* =========================================================
                1. LOGO SECTION (UPDATED: BIGGER & RICHER)
            ========================================================== */}
            <a href="#" className="flex items-center gap-4 group">
              
              {/* Logo Image Wrapper */}
              <div className={`relative flex items-center justify-center bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500 ${scrolled ? "w-10 h-10 p-0.5" : "w-14 h-14 p-1"}`}>
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              {/* Text Wrapper */}
              <div className="flex flex-col justify-center">
                <h1 className={`font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 transition-all duration-500 ${scrolled ? "text-xl" : "text-3xl"}`}>
                  ACUMEN
                </h1>
                
                {/* "Junior College" Line - Hides on Scroll */}
                <div className={`flex items-center gap-2 overflow-hidden transition-all duration-500 ${scrolled ? "h-0 opacity-0" : "h-auto opacity-100 mt-1.5"}`}>
                   <span className="h-[2px] w-6 bg-amber-500 rounded-full"></span>
                   <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.3em] leading-none whitespace-nowrap">
                     Junior College
                   </span>
                </div>
              </div>
            </a>

            {/* =========================================================
                2. CENTER LINKS (Desktop Only)
            ========================================================== */}
            <nav className={`hidden md:flex items-center gap-1 transition-all duration-500 ${scrolled ? "bg-transparent" : "bg-white/5 p-1.5 rounded-full border border-white/5"}`}>
              <DarkPillLink href="#about" label="About" />
              <DarkPillLink href="#faculty" label="Faculty" />
              <DarkPillLink href="#results" label="Results" />
              <DarkPillLink href="#directors" label="Leadership" />
            </nav>

            {/* =========================================================
                3. ACTION BUTTONS (Desktop)
            ========================================================== */}
            <div className="hidden md:flex items-center gap-6">
               
               {/* Phone Number (Hides on Scroll) */}
               <div className={`flex flex-col items-end transition-all duration-500 ${scrolled ? "hidden opacity-0 w-0" : "flex opacity-100"}`}>
                 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Admissions</p>
                 <a href="tel:+9198XXXXXXXX" className="text-sm font-bold text-white hover:text-indigo-400 transition-colors flex items-center gap-1">
                   +91 98XXX XXXXX
                 </a>
               </div>

               <a
                href="#contact"
                className={`
                  group bg-white text-slate-900 font-bold rounded-full flex items-center gap-2 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/40 transition-all duration-300
                  ${scrolled ? "px-5 py-2 text-xs" : "px-8 py-3 text-sm"}
                `}
              >
                <span>Enquire</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* =========================================================
                4. MOBILE TOGGLE
            ========================================================== */}
            <button
              className="md:hidden p-3 text-white bg-white/10 rounded-full hover:bg-indigo-600 transition-colors"
              onClick={() => setOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </header>
      </div>

      {/* =========================================================
          MOBILE MENU OVERLAY
      ========================================================== */}
      <div 
        className={`fixed inset-0 z-[60] bg-slate-950 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* BACKGROUND WATERMARK */}
        <div className="absolute -bottom-10 -right-10 text-[20vh] font-black text-white opacity-5 pointer-events-none rotate-[-10deg] leading-none">
          ACUMEN
        </div>
        
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Close Button */}
        <button 
          onClick={() => setOpen(false)}
          className="absolute top-8 right-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all duration-300 z-50"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Menu Content */}
        <nav className="relative z-10 h-full flex flex-col items-center justify-center gap-8">
          <MobileLink href="#about" label="About Campus" setOpen={setOpen} delay="100ms" />
          <MobileLink href="#faculty" label="Expert Faculty" setOpen={setOpen} delay="200ms" />
          <MobileLink href="#results" label="Results & Ranks" setOpen={setOpen} delay="300ms" />
          <MobileLink href="#directors" label="Leadership" setOpen={setOpen} delay="400ms" />
          
          <div className="w-20 h-[1px] bg-slate-800 my-4"></div>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-2xl shadow-indigo-600/50 hover:bg-white hover:text-indigo-900 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 delay-500"
          >
            <GraduationCap className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Start Admission
          </a>
        </nav>
      </div>
    </>
  );
}

/* --- Helper Components --- */

function DarkPillLink({ href, label }) {
  return (
    <a 
      href={href} 
      className="px-5 py-2 rounded-full text-sm font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
    >
      {label}
    </a>
  );
}

function MobileLink({ href, label, setOpen, delay }) {
  return (
    <a 
      href={href} 
      onClick={() => setOpen(false)}
      className="text-3xl md:text-5xl font-black text-slate-400 hover:text-white hover:scale-110 transition-all duration-300"
      style={{ animationDelay: delay }}
    >
      {label}
    </a>
  );
}