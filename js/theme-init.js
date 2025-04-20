// Đồng bộ theme giữa các tab, cửa sổ trình duyệt và các thiết bị khác
(function () {
  if (
    localStorage.getItem("theme") === "light" || // Kiểm tra nếu theme được lưu là "light"
    (!localStorage.getItem("theme") && window.matchMedia('(prefers-color-scheme: light)').matches) // Hoặc hệ thống đang ở chế độ sáng
  ) {
    document.documentElement.classList.remove('dark'); // Bỏ chế độ tối
  } else {
    document.documentElement.classList.add('dark'); // Bật chế độ tối
  }
})();

  