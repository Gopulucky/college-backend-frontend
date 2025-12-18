export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Shaping Future <br />
            <span className="text-indigo-600">Top Rankers</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Acumen Junior College provides focused preparation for
            IIT-JEE, NEET, and competitive examinations with
            experienced faculty, structured curriculum, and proven results.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="/class/login"
              className="px-7 py-3 rounded-md bg-indigo-600 text-white font-semibold text-center hover:bg-indigo-700 transition"
            >
              Student Login
            </a>

            <a
              href="/admin/login"
              className="px-7 py-3 rounded-md bg-slate-900 text-white font-semibold text-center hover:bg-slate-800 transition"
            >
              Admin Login
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg bg-gray-200">
            <img
              src="/src/assets/images/building-1.webp"
              alt="College Campus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
