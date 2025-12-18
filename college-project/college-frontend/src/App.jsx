import { Routes, Route } from "react-router-dom";

/* PUBLIC */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Faculty from "./components/Faculty";
import Directors from "./components/Directors";
import Results from "./components/Results";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* STUDENT */
import ClassLogin from "./class/ClassLogin";
import ClassDashboard from "./class/ClassDashboard";

/* ADMIN */
import AdminLogin from "./admin/AdminLogin";
import AdminHome from "./admin/AdminHome";
import Enquiries from "./admin/Enquiries";
import Marks from "./admin/Marks";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Faculty />
      <Directors />
      <Results />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Student */}
      <Route path="/class/login" element={<ClassLogin />} />
      <Route path="/class/dashboard" element={<ClassDashboard />} />

      {/* Admin */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminHome />} />
      <Route path="/admin/enquiries" element={<Enquiries />} />
      <Route path="/admin/marks" element={<Marks />} />
    </Routes>
  );
}
