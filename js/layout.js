document.addEventListener("DOMContentLoaded", () => {
  fetch('header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header-container').innerHTML = data;

      // Các phần tử trong header
      const toggleBtn = document.getElementById('toggle-theme');
      const menuBtn = document.getElementById('menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');

      // Toggle dark mode
      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          document.documentElement.classList.toggle('dark');
        });
      }

      // Toggle mobile menu
      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }

      // Xử lý nút "Lên đầu trang"
      const backToTopButton = document.getElementById('back-to-top');
      if (backToTopButton) {
        // Hiển thị nút khi cuộn xuống
        window.addEventListener('scroll', () => {
          if (window.scrollY > 300) {
            backToTopButton.classList.remove('hidden');
          } else {
            backToTopButton.classList.add('hidden');
          }
        });

        // Cuộn lên đầu trang khi nhấn nút
        backToTopButton.addEventListener('click', () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      } else {
        console.error("Không tìm thấy nút back-to-top");
      }
    })
    .catch(error => {
      console.error("Có lỗi khi tải header.html:", error);
    });

});
