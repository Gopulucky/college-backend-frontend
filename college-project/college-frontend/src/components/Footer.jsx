import logo from "../assets/logos/logo.jpeg";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  Send,
  ArrowUp
} from "lucide-react";

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">
      
      {/* Background Decoration: Massive Watermark */}
      <div className="absolute -bottom-20 -left-20 text-[200px] font-black text-slate-900 opacity-50 select-none pointer-events-none leading-none">
        ACUMEN
      </div>
      
      {/* Decorative Blur Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-10">
        
        {/* TOP SECTION: Call to Action / Newsletter */}
        <div className="bg-gradient-to-r from-indigo-900/50 to-slate-900/50 border border-indigo-500/20 rounded-2xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
           <div className="max-w-lg">
             <h3 className="text-2xl font-bold text-white mb-2">Stay Ahead of the Curve</h3>
             <p className="text-indigo-200/80">
               Subscribe to our admissions newsletter for exam tips, important dates, and campus news.
             </p>
           </div>
           
           <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
             <input 
               type="email" 
               placeholder="Enter your email" 
               className="bg-slate-950/50 border border-indigo-500/30 text-white px-5 py-3 rounded-xl focus:outline-none focus:border-indigo-400 min-w-[280px]"
             />
             <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
               Subscribe <Send className="w-4 h-4" />
             </button>
           </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* BRAND COLUMN (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-lg">
                <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white tracking-tighter leading-none">ACUMEN</h3>
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Junior College</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed pr-6">
              Forging the next generation of engineers and doctors through discipline, conceptual clarity, and unwavering mentorship.
            </p>
            <div className="flex gap-3">
               <SocialBtn icon={<Facebook className="w-5 h-5" />} />
               <SocialBtn icon={<Twitter className="w-5 h-5" />} />
               <SocialBtn icon={<Instagram className="w-5 h-5" />} />
               <SocialBtn icon={<Linkedin className="w-5 h-5" />} />
            </div>
          </div>

          {/* LINKS COLUMN 1 (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm font-medium">
              <FooterLink label="About Us" />
              <FooterLink label="Our Faculty" />
              <FooterLink label="Results" />
              <FooterLink label="Campus Life" />
              <FooterLink label="Careers" />
            </ul>
          </div>

          {/* LINKS COLUMN 2 (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6">Courses</h4>
            <ul className="space-y-4 text-sm font-medium">
              <FooterLink label="IIT-JEE Mains" color="text-indigo-400" />
              <FooterLink label="IIT-JEE Adv." color="text-indigo-400" />
              <FooterLink label="NEET Medical" color="text-emerald-400" />
              <FooterLink label="MPC Board" />
              <FooterLink label="BiPC Board" />
            </ul>
          </div>

          {/* CONTACT CARD COLUMN (Span 4) */}
          <div className="lg:col-span-4">
             <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-indigo-600/10 transition-colors rounded-2xl"></div>
                
                <h4 className="text-white font-bold mb-4 relative z-10">Visit Campus</h4>
                <ul className="space-y-4 relative z-10">
                  <li className="flex items-start gap-4">
                     <div className="bg-indigo-500/10 p-2 rounded-lg text-indigo-400">
                        <MapPin className="w-5 h-5" />
                     </div>
                     <span className="text-sm text-slate-300 leading-relaxed">
                       Opposite Main Bus Stand,<br/>
                       Hanamkonda, Warangal,<br/>
                       Telangana - 506001
                     </span>
                  </li>
                  <li className="flex items-center gap-4">
                     <div className="bg-indigo-500/10 p-2 rounded-lg text-indigo-400">
                        <Phone className="w-5 h-5" />
                     </div>
                     <span className="text-sm text-slate-300 font-bold hover:text-white cursor-pointer transition-colors">
                       +91 98XXX XXXXX
                     </span>
                  </li>
                  <li className="flex items-center gap-4">
                     <div className="bg-indigo-500/10 p-2 rounded-lg text-indigo-400">
                        <Mail className="w-5 h-5" />
                     </div>
                     <span className="text-sm text-slate-300 hover:text-white cursor-pointer transition-colors">
                       admissions@acumen.com
                     </span>
                  </li>
                </ul>
             </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2025 Acumen Junior College. Building Futures.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>

      {/* Back to Top Floating Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-white text-indigo-900 p-3 rounded-full shadow-2xl hover:bg-indigo-400 hover:text-white hover:-translate-y-1 transition-all duration-300 z-50 group"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
      </button>

    </footer>
  );
}

/* --- Helper Components --- */

function SocialBtn({ icon }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-300 border border-slate-800 hover:border-indigo-500">
      {icon}
    </a>
  );
}

function FooterLink({ label, color }) {
  return (
    <li>
      <a href="#" className="flex items-center gap-2 group">
        <span className={`w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-indigo-500 transition-colors ${color ? "bg-slate-700" : ""}`}></span>
        <span className={`text-slate-400 group-hover:translate-x-1 transition-all duration-300 group-hover:text-white ${color}`}>
          {label}
        </span>
      </a>
    </li>
  );
}