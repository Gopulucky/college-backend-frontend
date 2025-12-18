const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/jwt");

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  console.log("AUTH HEADER:", authHeader); // DEBUG (remove later)

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({ message: "Malformed token" });
  }

  const token = parts[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("DECODED TOKEN:", decoded); // DEBUG
    req.user = decoded;
    next();
  } catch (err) {
    console.error("JWT ERROR:", err.message);
    return res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = authenticate;
