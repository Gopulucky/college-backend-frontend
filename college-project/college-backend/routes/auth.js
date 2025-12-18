const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../database/db");

const router = express.Router();

router.post("/login", async (req, res) => {
  console.log("➡️ STUDENT LOGIN HIT");

  const { class_code, password } = req.body;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM classes WHERE login_id = ?",
      [class_code]
    );

    console.log("STUDENT QUERY RESULT:", rows.length);

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid class code" });
    }

    const match = await bcrypt.compare(password, rows[0].password_hash);
    console.log("STUDENT PASSWORD MATCH:", match);

    if (!match) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { classId: rows[0].id },
      "secret123",
      { expiresIn: "2h" }
    );

    res.json({ token });
  } catch (err) {
    console.error("❌ STUDENT LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
