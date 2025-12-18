export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* College Info */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Acumen Junior College
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              A premier junior college focused on academic excellence,
              competitive exam preparation, and disciplined learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#faculty" className="hover:text-white">Faculty</a></li>
              <li><a href="#directors" className="hover:text-white">Directors</a></li>
              <li><a href="#results" className="hover:text-white">Results</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h4>
            <p className="mt-4 text-sm">
              📞 70755 85772<br />
              📞 94909 90022
            </p>
            <p className="mt-3 text-sm">
              📍 Ambedkar Bhavan Road,<br />
              Near Pochamma Temple,<br />
              Vidyanagar, Hanumakonda – 506001
            </p>
          </div>

          {/* Academic Focus */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Academic Focus
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>IIT-JEE</li>
              <li>NEET</li>
              <li>BITSAT</li>
              <li>EAPCET</li>
              <li>Olympiads</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-700 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>
            © {new Date().getFullYear()} Acumen Junior College. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Designed & Developed by Acumen Team
          </p>
        </div>

      </div>
    </footer>
  );
}
