const express = require("express");
const router = express.Router();
const db = require("../database/db");
const verifyAdmin = require("../middleware/adminAuth");

// ===============================
// ADD / UPDATE STUDENT MARKS
// ===============================
router.post("/marks", verifyAdmin, (req, res) => {
  const { class_id, roll_no, name, maths, physics, chemistry } = req.body;

  // Step 1: Insert student if not exists
  const studentSql = `
    INSERT INTO students (class_id, roll_no, name)
    VALUES (?, ?, ?)
    ON DUPLICATE KEY UPDATE name = VALUES(name)
  `;

  db.query(studentSql, [class_id, roll_no, name], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Student insert failed" });
    }

    // Step 2: Get student_id
    const getStudentSql = `
      SELECT id FROM students WHERE class_id = ? AND roll_no = ?
    `;

    db.query(getStudentSql, [class_id, roll_no], (err, rows) => {
      if (err || rows.length === 0) {
        return res.status(500).json({ error: "Student fetch failed" });
      }

      const studentId = rows[0].id;

      // Step 3: Insert / Update marks
      const marksSql = `
        INSERT INTO student_marks (student_id, maths, physics, chemistry)
        VALUES (?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          maths = VALUES(maths),
          physics = VALUES(physics),
          chemistry = VALUES(chemistry)
      `;

      db.query(
        marksSql,
        [studentId, maths, physics, chemistry],
        (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: "Marks update failed" });
          }

          res.json({ success: true, message: "Marks saved successfully" });
        }
      );
    });
  });
});

module.exports = router;
