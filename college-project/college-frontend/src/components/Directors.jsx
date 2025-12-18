import director1 from "../assets/images/shravan sir.png";
import director2 from "../assets/images/sandeep sir.png";

export default function Directors() {
  return (
    <section id="directors" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">
            Leadership
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Visionary Academic Leadership
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Experienced leaders guiding students with clarity and discipline.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-12 md:grid-cols-2">

          {/* CARD */}
          <div className="bg-white rounded-xl shadow p-8 flex gap-6 items-start">
            <img
              src={director1}
              alt="Dr. Shravan Kumar"
              className="w-[110px] h-[150px] object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Dr. R. Shravan Kumar
              </h3>
              <p className="text-sm text-accent font-medium">
                Director – Medical Academy
              </p>
              <p className="mt-3 text-slate-600">
                MBBS (KMC), M.S. (GMC). Focused on NEET excellence and mentorship.
              </p>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white rounded-xl shadow p-8 flex gap-6 items-start">
            <img
              src={director2}
              alt="Mr. Sandeep Mukkala"
              className="w-[110px] h-[150px] object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Mr. Sandeep Mukkala
              </h3>
              <p className="text-sm text-accent font-medium">
                Director – Physics & IIT-JEE
              </p>
              <p className="mt-3 text-slate-600">
                NIT Warangal (B.Tech), AIR 568 (JEE 2005).
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
