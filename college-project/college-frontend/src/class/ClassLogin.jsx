import { useState } from "react";

export default function ClassLogin() {
  const [classCode, setClassCode] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/class/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          class_code: classCode,
          password: password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // ✅ store token
      localStorage.setItem("classToken", data.token);

      // ✅ redirect
      window.location.href = "/class/dashboard";
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <h2>Student Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Class Code"
          value={classCode}
          onChange={(e) => setClassCode(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
