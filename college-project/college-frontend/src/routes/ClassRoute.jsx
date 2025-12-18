import { Navigate } from "react-router-dom";

export default function ClassRoute({ children }) {
  const token = localStorage.getItem("classToken");

  if (!token) {
    return <Navigate to="/class/login" replace />;
  }

  return children;
}
