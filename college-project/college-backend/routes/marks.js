const express = require("express");
const db = require("../database/db");
const authenticate = require("../middleware/auth");

const router = express.Router();

router.get("/class/marks", authenticate, (req, res) => {
  const classId = req.user.class_id;

  db.query(
    `
    SELECT 
      subject, 
      marks, 
      DATE_FORMAT(exam_date, '%Y-%m-%d') AS exam_date
    FROM marks
    WHERE class_id = ?
    ORDER BY subject ASC
    `,
    [classId],
    (err, results) => {
      if (err) return res.status(500).json({ message: "Server error" });
      res.json(results);
    }
  );
});

module.exports = router;
