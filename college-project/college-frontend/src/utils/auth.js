// utils/auth.js
// ⚠️ NO SIDE EFFECTS, NO REDIRECTS

export function getClassToken() {
  return localStorage.getItem("classToken");
}

export function getAdminToken() {
  return localStorage.getItem("adminToken");
}

export function clearClassToken() {
  localStorage.removeItem("classToken");
}

export function clearAdminToken() {
  localStorage.removeItem("adminToken");
}
