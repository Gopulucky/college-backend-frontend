import { Routes, Route } from "react-router-dom";

// =======================
// 1. PUBLIC WEBSITE COMPONENTS
// =======================
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";         // 🟢 ADDED (Was missing)
import Faculty from "./components/Faculty";     // 🟢 ADDED (Was missing)
import Results from "./components/Results";
import Directors from "./components/Directors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// =======================
// 2. STUDENT COMPONENTS
// =======================
import ClassLogin from "./class/ClassLogin";         
import ClassDashboard from "./class/ClassDashboard"; 

// =======================
// 3. ADMIN COMPONENTS
// =======================
import AdminLayout from "./admin/AdminLayout";       
import AdminLogin from "./admin/AdminLogin";         
import AdminHome from "./admin/AdminHome";           
import Enquiries from "./admin/Enquiries";           
import Marks from "./admin/Marks";                   
import ManageClasses from "./admin/ManageClasses";

function App() {
  return (
    <Routes>
      
      {/* ====================================================
          🟢 PUBLIC HOME PAGE (All Sections Included)
      ===================================================== */}
      <Route path="/" element={
        <>
          <Navbar />
          <main>
            <Hero />
            <About />       {/* 🟢 Added About Section */}
            <Directors />
            <Faculty />     {/* 🟢 Added Faculty Section */}
            <Results />
            <Contact />
          </main>
          <Footer />
        </>
      } />

      {/* ====================================================
          🔵 STUDENT PORTAL ROUTES
      ===================================================== */}
      <Route path="/class/login" element={<ClassLogin />} />
      <Route path="/class/dashboard" element={<ClassDashboard />} />

      {/* ====================================================
          🔴 ADMIN PORTAL ROUTES
      ===================================================== */}
      {/* Standalone Login Page */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Protected Admin Dashboard (Layout wraps these pages) */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminHome />} />
        <Route path="classes" element={<ManageClasses />} />
        <Route path="enquiries" element={<Enquiries />} />
        <Route path="marks" element={<Marks />} />
      </Route>

    </Routes>
  );
}

export default App;