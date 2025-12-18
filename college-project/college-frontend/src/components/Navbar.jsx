import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo / Name */}
          <div className="font-semibold text-slate-900">
            Acumen Junior College
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#faculty" className="hover:text-slate-900">Faculty</a>
            <a href="#directors" className="hover:text-slate-900">Leadership</a>
            <a href="#results" className="hover:text-slate-900">Results</a>
            <a
              href="#contact"
              className="bg-primary text-white px-4 py-2 rounded-lg shadow-sm hover:bg-slate-900 transition"
            >
              Enquire
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-slate-700">
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#faculty" onClick={() => setOpen(false)}>Faculty</a>
            <a href="#directors" onClick={() => setOpen(false)}>Leadership</a>
            <a href="#results" onClick={() => setOpen(false)}>Results</a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-primary text-white px-4 py-2 rounded-lg text-center"
            >
              Enquire
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
