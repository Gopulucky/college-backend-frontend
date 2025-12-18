const express = require("express");
const router = express.Router();
const db = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// 🟢 FIXED SECRET KEY (Must match middleware!)
const JWT_SECRET = "acumen_secret_key_999"; 

router.post("/login", async (req, res) => {
  console.log("➡️ STUDENT LOGIN HIT");
  const { class_code, password } = req.body;

  try {
    const [rows] = await db.query("SELECT * FROM classes WHERE login_id = ?", [class_code]);
    console.log("STUDENT QUERY RESULT:", rows.length);

    if (rows.length === 0) return res.status(404).json({ message: "Class ID not found" });

    const classData = rows[0];
    const match = await bcrypt.compare(password, classData.password_hash);
    console.log("STUDENT PASSWORD MATCH:", match);

    if (!match) return res.status(401).json({ message: "Invalid Password" });

    // Generate Token using the FIXED key
    const token = jwt.sign(
      { classId: classData.id, loginId: classData.login_id },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({ token, message: "Login Successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;