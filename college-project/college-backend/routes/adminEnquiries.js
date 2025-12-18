const express = require("express");
const router = express.Router();
const db = require("../database/db");

// ===============================
// GET ALL ENQUIRIES (ADMIN)
// ===============================
router.get("/enquiries", (req, res) => {
  const sql = `
    SELECT id, name, phone, email, course, message, created_at
    FROM enquiries
    ORDER BY created_at DESC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Enquiries error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});

module.exports = router;
