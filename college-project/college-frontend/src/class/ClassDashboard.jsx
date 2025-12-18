import { useEffect, useState } from "react";

export default function ClassDashboard() {
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/class/marks", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("classToken")}`
      }
    })
      .then(res => res.json())
      .then(data => setMarks(Array.isArray(data) ? data : []))
      .catch(() => {});
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Class Dashboard</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Maths</th>
            <th>Physics</th>
            <th>Chemistry</th>
            <th>Total</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((m, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{m.name}</td>
              <td>{m.maths}</td>
              <td>{m.physics}</td>
              <td>{m.chemistry}</td>
              <td>{m.total_marks}</td>
              <td>{m.rank_position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
