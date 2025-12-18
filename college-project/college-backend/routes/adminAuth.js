const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../database/db");

const router = express.Router();

router.post("/login", async (req, res) => {
  console.log("➡️ ADMIN LOGIN HIT");

  const { username, password } = req.body;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM admins WHERE username = ?",
      [username]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const admin = rows[0];

    const match = await bcrypt.compare(password, admin.password_hash);
    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { adminId: admin.id },
      "secret123",
      { expiresIn: "2h" }
    );

    return res.json({ token });

  } catch (err) {
    console.error("❌ ADMIN LOGIN ERROR:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
