const express = require("express");
const router = express.Router();
const db = require("../database/db");
const verifyToken = require("../middleware/auth"); // your existing JWT middleware

/*
JWT payload MUST contain:
{
  class_id: <number>,
  class_code: <string>
}
*/

// ===============================
// GET MARKS FOR LOGGED-IN CLASS
// ===============================
router.get("/marks", verifyToken, (req, res) => {
  const classId = req.user.class_id;

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

  db.query(sql, [classId], (err, results) => {
    if (err) {
      console.error("Class marks error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});

module.exports = router;
