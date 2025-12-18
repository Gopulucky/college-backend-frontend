export default function Faculty() {
  return (
    <section id="faculty" className="section section-muted">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <p className="text-sm font-semibold text-accent tracking-wider uppercase">
            Our Faculty
          </p>
          <h2 className="mt-3">
            Experienced. Dedicated. Result-Oriented.
          </h2>
          <p className="mt-4 text-muted text-lg">
            Our faculty members are highly qualified educators from IITs, NITs,
            and premier medical institutions, focused on academic excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Card */}
          <div className="card card-hover p-6 text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-lg font-semibold">
              KS
            </div>
            <h3>Mr. Koneti Sreenivasulu</h3>
            <span className="badge mt-2">Mathematics</span>
            <p className="mt-3 text-sm text-slate-600">
              IIT Bombay (CSE)<br />AIR 34
            </p>
          </div>

          <div className="card card-hover p-6 text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-lg font-semibold">
              SM
            </div>
            <h3>Mr. Sandeep Mukkala</h3>
            <span className="badge mt-2">Physics</span>
            <p className="mt-3 text-sm text-slate-600">
              NIT Warangal (B.Tech)<br />AIR 568 – JEE 2005
            </p>
          </div>

          <div className="card card-hover p-6 text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-lg font-semibold">
              S
            </div>
            <h3>Mr. Sudhakar</h3>
            <span className="badge mt-2">Chemistry</span>
            <p className="mt-3 text-sm text-slate-600">
              IIT Graduate
            </p>
          </div>

          <div className="card card-hover p-6 text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-lg font-semibold">
              RSK
            </div>
            <h3>Dr. R. Shravan Kumar</h3>
            <span className="badge mt-2">Zoology (BiPC)</span>
            <p className="mt-3 text-sm text-slate-600">
              MBBS (KMC)<br />M.S. (GMC)
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
