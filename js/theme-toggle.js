// theme-toggle.js

// Lưu trạng thái theme vào localStorage
const toggle = document.getElementById("toggle-theme");
const html = document.documentElement;

if (localStorage.getItem("theme") === "light") {
  html.classList.remove("dark");
} else {
  html.classList.add("dark");
}

if (toggle) {
  toggle.addEventListener("click", () => {
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
}

// Xử lý chế độ Dark Mode
window.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-theme");
  const root = document.documentElement;

  // Kiểm tra trạng thái lưu trong localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    root.classList.add("dark");
  } else if (savedTheme === "light") {
    root.classList.remove("dark");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      root.classList.toggle("dark");

      // Lưu lại trạng thái theme
      if (root.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }
});
