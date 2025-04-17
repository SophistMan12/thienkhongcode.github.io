
const toggle = document.getElementById("toggle-theme");
const html = document.documentElement;

if (localStorage.getItem("theme") === "light") {
  html.classList.remove("dark");
} else {
  html.classList.add("dark");
}

toggle.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});
