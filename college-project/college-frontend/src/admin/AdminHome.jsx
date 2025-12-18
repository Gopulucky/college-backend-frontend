import { useEffect } from "react";

export default function AdminHome() {
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      window.location.href = "/admin/login";
    }
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Admin Dashboard</h2>
      <p>Welcome, Admin.</p>

      <ul>
        <li><a href="/admin/enquiries">View Enquiries</a></li>
        <li><a href="/admin/marks">Manage Marks</a></li>
      </ul>
    </div>
  );
}
