// theme-toggle.js

// Theme toggle
const themeBtn = document.getElementById('toggle-theme');
themeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

// Hamburger menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
