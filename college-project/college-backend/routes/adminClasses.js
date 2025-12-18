const express = require("express");
const router = express.Router();
const db = require("../database/db");
const bcrypt = require("bcrypt");

// 1. GET ALL CLASSES
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT id, login_id, created_at FROM classes ORDER BY created_at DESC");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
});

// 2. CREATE NEW CLASS
router.post("/create", async (req, res) => {
  const { className, password } = req.body;

  if (!className || !password) {
    return res.status(400).json({ error: "Class Name and Password are required" });
  }

  try {
    // Check if class exists
    const [existing] = await db.query("SELECT id FROM classes WHERE login_id = ?", [className]);
    if (existing.length > 0) {
      return res.status(400).json({ error: "Class ID already exists" });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Insert
    await db.query("INSERT INTO classes (login_id, password_hash) VALUES (?, ?)", [className, hash]);

    res.json({ success: true, message: "Class created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// 3. DELETE CLASS (Optional utility)
router.delete("/:id", async (req, res) => {
  try {
    await db.query("DELETE FROM classes WHERE id = ?", [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete" });
  }
});

module.exports = router;