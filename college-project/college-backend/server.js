const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

// ================= ROUTES =================

// 1. Admin Auth
const adminAuthRoutes = require("./routes/adminAuth");
app.use("/api/admin", adminAuthRoutes);

// 2. Admin Marks
const adminMarksRoutes = require("./routes/adminMarks");
app.use("/api/admin", adminMarksRoutes); 

// 3. Admin Classes (Make sure you created the file above!)
const adminClassRoutes = require("./routes/adminClasses");
app.use("/api/admin/classes", adminClassRoutes);

// 4. Student Auth
const classAuthRoutes = require("./routes/auth");
app.use("/api/class", classAuthRoutes);

// 5. Student Marks
const classMarksRoutes = require("./routes/classMarks");
app.use("/api/class", classMarksRoutes);

// 6. Enquiries
const enquiryRoutes = require("./routes/adminEnquiries"); 
app.use("/api/enquiry", enquiryRoutes);                   

app.get("/", (req, res) => res.send("Backend running"));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});