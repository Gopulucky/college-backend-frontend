const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

// ================= ROUTES =================

// Admin routes
const adminAuthRoutes = require("./routes/adminAuth");
app.use("/api/admin", adminAuthRoutes);

// Student / Class routes
const classAuthRoutes = require("./routes/auth");   // 👈 IMPORTANT
app.use("/api/class", classAuthRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
