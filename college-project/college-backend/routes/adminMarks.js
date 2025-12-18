const express = require("express");
const router = express.Router();
const db = require("../database/db");

// ADD / UPDATE MARKS (Lookup ID from Login Name)
router.post("/marks", async (req, res) => {
  // 1. We receive 'class_login_id' (e.g. "jee-adv-2025-a") from Frontend
  const { class_login_id, roll_no, name, maths, physics, chemistry } = req.body;

  try {
    // 2. Find the numeric ID for this class
    const [classRows] = await db.query("SELECT id FROM classes WHERE login_id = ?", [class_login_id]);
    
    if (classRows.length === 0) {
      return res.status(404).json({ error: `Class '${class_login_id}' not found. Check spelling.` });
    }
    const numericClassId = classRows[0].id; // e.g., 1

    // 3. Insert/Update Student using the numeric ID
    await db.query(`
      INSERT INTO students (class_id, roll_no, name) VALUES (?, ?, ?)
      ON DUPLICATE KEY UPDATE name = VALUES(name)
    `, [numericClassId, roll_no, name]);

    // 4. Get the Student's unique DB ID
    const [sRows] = await db.query("SELECT id FROM students WHERE class_id = ? AND roll_no = ?", [numericClassId, roll_no]);
    const studentId = sRows[0].id;

    // 5. Insert Marks
    await db.query(`
      INSERT INTO student_marks (student_id, maths, physics, chemistry) VALUES (?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE maths=VALUES(maths), physics=VALUES(physics), chemistry=VALUES(chemistry)
    `, [studentId, maths, physics, chemistry]);

    res.json({ success: true, message: "Marks uploaded successfully" });

  } catch (err) {
    console.error("Upload Error:", err);
    res.status(500).json({ error: "Database error during upload." });
  }
});

module.exports = router;