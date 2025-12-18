export default function Results() {
  return (
    <section id="results" className="section section-muted">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <p className="text-sm font-semibold text-accent tracking-wider uppercase">
            Results
          </p>
          <h2 className="mt-3">
            Proven Academic Outcomes
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Consistent performance across competitive examinations reflects
            disciplined teaching, focused preparation, and strong mentorship.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          <div className="card card-hover p-6 text-center">
            <p className="text-4xl font-bold text-slate-900">45+</p>
            <p className="mt-2 text-sm text-slate-600">
              IIT / NIT / BITS Selections
            </p>
          </div>

          <div className="card card-hover p-6 text-center">
            <p className="text-4xl font-bold text-slate-900">60+</p>
            <p className="mt-2 text-sm text-slate-600">
              JEE Mains Qualified
            </p>
          </div>

          <div className="card card-hover p-6 text-center">
            <p className="text-4xl font-bold text-slate-900">15+</p>
            <p className="mt-2 text-sm text-slate-600">
              JEE Advanced Qualified
            </p>
          </div>

          <div className="card card-hover p-6 text-center">
            <p className="text-4xl font-bold text-slate-900">20+</p>
            <p className="mt-2 text-sm text-slate-600">
              NEET Selections
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-200 mb-16" />

        {/* Year-wise Highlights */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="card card-hover p-6">
            <h3 className="text-lg font-semibold">
              Batch 2020–2022
            </h3>
            <p className="mt-3 text-slate-600">
              20 out of 50 students secured admissions in IITs, IIITs, NITs,
              and BITS through focused preparation.
            </p>
          </div>

          <div className="card card-hover p-6">
            <h3 className="text-lg font-semibold">
              Batch 2021–2023
            </h3>
            <p className="mt-3 text-slate-600">
              40 out of 85 students achieved selections in top engineering
              institutions across India.
            </p>
          </div>

          <div className="card card-hover p-6">
            <h3 className="text-lg font-semibold">
              Batch 2022–2024
            </h3>
            <p className="mt-3 text-slate-600">
              45 out of 136 students secured IIT, IIIT, NIT, BITS, and NEET
              admissions with strong all-round performance.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
