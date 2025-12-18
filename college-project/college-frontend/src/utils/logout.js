export function logout(type) {
  if (type === "admin") {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  }

  if (type === "class") {
    localStorage.removeItem("classToken");
    window.location.href = "/class/login";
  }
}
