const express = require("express");
const router = express.Router();
const db = require("../database/db");

// 1. SUBMIT ENQUIRY
router.post("/", async (req, res) => {
  const { name, phone, email, course, message } = req.body;
  if (!name || !phone || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }
  try {
    await db.query(
      "INSERT INTO enquiries (name, phone, email, course, message, created_at) VALUES (?, ?, ?, ?, ?, NOW())",
      [name, phone, email, course, message]
    );
    console.log("✅ Enquiry Saved:", name); // Debug Log
    res.status(201).json({ success: true, message: "Enquiry saved" });
  } catch (err) {
    console.error("❌ Enquiry Error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// 2. GET ENQUIRIES
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM enquiries ORDER BY created_at DESC");
    console.log("✅ Fetching Enquiries. Count:", rows.length); // Debug Log
    res.json(rows);
  } catch (err) {
    console.error("❌ Fetch Error:", err);
    res.status(500).json({ error: "Failed to fetch" });
  }
});

module.exports = router;