document.addEventListener("DOMContentLoaded", () => {
    fetch('header.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('header-container').innerHTML = data;
        
        // Đảm bảo rằng header đã được chèn vào và các phần tử có tồn tại
        const toggleBtn = document.getElementById('toggle-theme');
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        // Toggle dark mode
        if (toggleBtn) {
          toggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
          });
        } else {
          console.error("Không tìm thấy nút toggle-theme");
        }
  
        // Toggle mobile menu
        if (menuBtn && mobileMenu) {
          menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
          });
        } else {
          console.error("Không tìm thấy nút menu-btn hoặc mobile-menu");
        }
      })
      .catch(error => {
        console.error("Có lỗi khi tải header.html:", error);
      });
  });
  