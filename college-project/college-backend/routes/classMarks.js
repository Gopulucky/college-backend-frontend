const express = require("express");
const router = express.Router();
const db = require("../database/db");
const verifyToken = require("../middleware/auth");

// GET MARKS FOR LOGGED-IN CLASS
router.get("/marks", verifyToken, async (req, res) => {
  // 1. FIX: Use 'classId' (matches auth.js), not 'class_id'
  const classId = req.user.classId; 

  console.log("Fetching marks for Class ID:", classId); // Debugging log

  const sql = `
    SELECT
      roll_no,
      name,
      maths,
      physics,
      chemistry,
      total_marks,
      rank_position
    FROM class_marks_view
    WHERE class_id = ?
    ORDER BY rank_position ASC
  `;

  try {
    // 2. FIX: Use async/await instead of callback
    const [results] = await db.query(sql, [classId]);
    res.json(results);
  } catch (err) {
    console.error("Class marks error:", err);
    return res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;