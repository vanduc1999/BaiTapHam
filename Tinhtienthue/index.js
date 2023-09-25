function tinhThueThuNhap() {
  // Lấy thu nhập năm từ người dùng
  var thuNhapNam = parseFloat(document.getElementById("thu-nhap-nam").value);

  // Xác định thuế theo mức thuế
  var thue = 0;
  if (thuNhapNam <= 50000000) {
    thue = thuNhapNam * 0.05;
  } else if (thuNhapNam <= 200000000) {
    thue = 50000000 * 0.05 + (thuNhapNam - 50000000) * 0.1;
  } else if (thuNhapNam <= 500000000) {
    thue = 50000000 * 0.05 + 150000000 * 0.1 + (thuNhapNam - 200000000) * 0.15;
  } else {
    thue =
      50000000 * 0.05 +
      150000000 * 0.1 +
      300000000 * 0.15 +
      (thuNhapNam - 500000000) * 0.2;
  }

  // Sử dụng NumberFormat để hiển thị số tiền đẹp hơn
  var formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  var thueFormatted = formatter.format(thue);

  document.getElementById("ket-qua").textContent =
    "Số thuế thu nhập của bạn là: " + thueFormatted;
}
