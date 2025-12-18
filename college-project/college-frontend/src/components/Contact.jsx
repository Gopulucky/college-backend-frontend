import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, ArrowRight, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", course: "JEE Mains", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("http://localhost:5000/api/enquiry", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", course: "JEE Mains", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-slate-950 overflow-hidden">
      
      {/* =========================================
          BACKGROUND DECOR (Brand Style)
      ========================================= */}
      {/* Large Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.03]">
        <h1 className="text-[15vw] font-black text-white leading-none tracking-tighter uppercase">
          CONTACT
        </h1>
      </div>

      {/* Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* =======================
              LEFT COLUMN: INFO
          ======================= */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
              Let's Start Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
                Success Story.
              </span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
              Have questions about admissions, faculty, or campus life? Reach out to us directly. We are here to guide you.
            </p>
            
            <div className="space-y-6">
              <ContactItem 
                icon={<Phone className="w-6 h-6 text-white" />} 
                title="Call Us" 
                text="+91 98765 43210" 
                sub="Mon-Sat, 9am to 6pm"
              />
              <ContactItem 
                icon={<Mail className="w-6 h-6 text-white" />} 
                title="Email Us" 
                text="info@acumen.edu" 
                sub="We reply within 24 hours"
              />
              <ContactItem 
                icon={<MapPin className="w-6 h-6 text-white" />} 
                title="Visit Campus" 
                text="Hanamkonda, Warangal" 
                sub="Main Academic Block"
              />
            </div>
          </div>

          {/* =======================
              RIGHT COLUMN: FORM
          ======================= */}
          <div className="relative">
            {/* Form Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-3xl opacity-30 blur-lg"></div>
            
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
              
              {status === "success" ? (
                <div className="text-center py-20 animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                    <CheckCircle className="w-10 h-10"/>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400">Thank you for reaching out.<br/>We will contact you shortly.</p>
                  <button 
                    onClick={()=>setStatus("idle")} 
                    className="mt-8 text-indigo-400 font-bold hover:text-indigo-300 transition-colors flex items-center justify-center gap-2 mx-auto"
                  >
                    Send Another <ArrowRight className="w-4 h-4"/>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    <InputGroup name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
                    <InputGroup name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                  </div>

                  <InputGroup name="email" placeholder="Email Address (Optional)" value={formData.email} onChange={handleChange} type="email" />

                  <div className="space-y-1">
                     <label className="text-xs font-bold text-slate-500 ml-1 uppercase">Interested Course</label>
                     <div className="relative">
                       <select 
                         name="course" 
                         value={formData.course} 
                         onChange={handleChange} 
                         className="w-full px-5 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-white appearance-none transition-all hover:bg-slate-800"
                       >
                         <option className="bg-slate-900">JEE Mains</option>
                         <option className="bg-slate-900">JEE Advanced</option>
                         <option className="bg-slate-900">NEET Medical</option>
                         <option className="bg-slate-900">Foundation (8-10th)</option>
                       </select>
                       <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                         <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                       </div>
                     </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 ml-1 uppercase">Your Message</label>
                    <textarea 
                      name="message" 
                      placeholder="How can we help you?" 
                      rows="4" 
                      value={formData.message} 
                      onChange={handleChange} 
                      className="w-full px-5 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-white placeholder:text-slate-600 transition-all hover:bg-slate-800 resize-none" 
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    disabled={status==="loading"} 
                    className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-indigo-900/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:transform-none"
                  >
                    {status==="loading" ? <Loader2 className="animate-spin w-5 h-5"/> : <>Send Message <Send className="w-5 h-5"/></>}
                  </button>

                  {status === "error" && (
                    <p className="text-red-400 text-center font-medium text-sm bg-red-500/10 py-2 rounded-lg border border-red-500/20">
                      Failed to send message. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Helper Components for Cleaner Code

function ContactItem({ icon, title, text, sub }) {
  return (
    <div className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-default">
      <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center shadow-lg border border-slate-700 group-hover:scale-110 group-hover:border-indigo-500/50 transition-all duration-300">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-white text-lg">{title}</h3>
        <p className="text-indigo-400 font-medium">{text}</p>
        <p className="text-slate-500 text-xs mt-0.5">{sub}</p>
      </div>
    </div>
  );
}

function InputGroup({ name, placeholder, value, onChange, type = "text" }) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-bold text-slate-500 ml-1 uppercase">{placeholder}</label>
      <input 
        type={type}
        name={name} 
        value={value} 
        onChange={onChange} 
        className="w-full px-5 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-white placeholder:text-slate-600 transition-all hover:bg-slate-800" 
        required={name !== "email"}
      />
    </div>
  );
}