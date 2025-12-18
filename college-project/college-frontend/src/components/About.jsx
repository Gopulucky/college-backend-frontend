import pencilImage from "../assets/images/acumen-pencil.png";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* HEADER */}
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">
            About Us
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Building Strong Academic Foundations
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Discipline, clarity, and consistent mentorship define our approach.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid gap-12 md:grid-cols-2 items-center">

          {/* TEXT */}
          <div className="space-y-4 text-slate-600 max-w-xl">
            <p>
              At Acumen Junior College, education goes beyond textbooks. We
              encourage analytical thinking, curiosity, and academic discipline.
            </p>
            <p>
              With faculty from IITs, NITs, and premier medical institutions, we
              prepare students for competitive excellence.
            </p>
            <blockquote className="border-l-4 border-accent pl-4 italic text-slate-500">
              “The wonder of teaching is watching caterpillars become butterflies.”
            </blockquote>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="w-48 sm:w-56 md:w-72">
              <img
                src={pencilImage}
                alt="Learning Philosophy"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
