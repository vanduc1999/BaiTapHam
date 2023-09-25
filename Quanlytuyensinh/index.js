function tinhDiemChuan() {
  // Lấy điểm chuẩn từ người dùng
  var diemChuanMon1 = parseFloat(prompt("Nhập điểm chuẩn môn 1:"));
  var diemChuanMon2 = parseFloat(prompt("Nhập điểm chuẩn môn 2:"));
  var diemChuanMon3 = parseFloat(prompt("Nhập điểm chuẩn môn 3:"));

  // Lấy điểm từ người dùng
  var diemMon1 = parseFloat(document.getElementById("diem-mon1").value);
  var diemMon2 = parseFloat(document.getElementById("diem-mon2").value);
  var diemMon3 = parseFloat(document.getElementById("diem-mon3").value);

  // Lấy khu vực từ người dùng
  var khuVuc = document.getElementById("khu-vuc").value;

  // Lấy đối tượng từ người dùng
  var doiTuong = document.querySelector('input[name="doi-tuong"]:checked');

  // Xác định điểm khu vực
  var diemKhuVuc = 0;
  if (khuVuc === "A" || khuVuc === "B" || khuVuc === "C") {
    diemKhuVuc = 2;
  }

  // Xác định điểm đối tượng
  var diemDoiTuong = 0;
  if (doiTuong) {
    diemDoiTuong = parseFloat(doiTuong.value);
  }

  // Kiểm tra điểm môn
  if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
    document.getElementById("ket-qua").textContent =
      "Bạn đã rớt vì có môn điểm 0.";
  } else {
    var tongDiem = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;

    // Kiểm tra xem có đạt điểm chuẩn không
    if (
      tongDiem >= diemChuanMon1 ||
      tongDiem >= diemChuanMon2 ||
      tongDiem >= diemChuanMon3
    ) {
      document.getElementById("ket-qua").textContent = "Chúc mừng, bạn đã đậu!";
    } else {
      document.getElementById("ket-qua").textContent =
        "Bạn đã rớt vì không đạt điểm chuẩn.";
    }
  }
}
