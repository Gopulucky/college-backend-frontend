const bcrypt = require("bcrypt");

async function generateHashes() {
  const adminPassword = "admin123";
  const studentPassword = "class123";

  const adminHash = await bcrypt.hash(adminPassword, 10);
  const studentHash = await bcrypt.hash(studentPassword, 10);

  console.log("========== GENERATED HASHES ==========");
  console.log("ADMIN PASSWORD   :", adminPassword);
  console.log("ADMIN HASH       :", adminHash);
  console.log("--------------------------------------");
  console.log("STUDENT PASSWORD :", studentPassword);
  console.log("STUDENT HASH     :", studentHash);
  console.log("======================================");
}

generateHashes();
