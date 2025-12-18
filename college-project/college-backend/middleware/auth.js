const jwt = require("jsonwebtoken");

// 🟢 SAME KEY AS auth.js
const JWT_SECRET = "acumen_secret_key_999";

const verifyToken = (req, res, next) => {
  const tokenHeader = req.headers["authorization"];
  
  if (!tokenHeader) {
    return res.status(403).json({ error: "No token provided" });
  }

  const token = tokenHeader.split(" ")[1]; // Remove "Bearer "

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log("JWT ERROR:", err.message); // This is what you were seeing in the logs
      return res.status(401).json({ error: "Unauthorized: Invalid Token" });
    }
    req.user = decoded; // Successfully decoded
    next();
  });
};

module.exports = verifyToken;