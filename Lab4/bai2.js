// Tạo đối tượng sinh viên
var sv = new Object();

// Nhập họ tên và điểm
sv.hoTen = prompt("Họ và tên:");
sv.diem = prompt("Điểm:");

// Khai báo cho phương thức hienThi()
sv.hienThi = function() {
    // Xếp loại học lực
    let hocLuc;
    if (sv.diem >= 9) {
        hocLuc = "Xuất sắc";
    } else if (sv.diem >= 8) {
        hocLuc = "Giỏi";
    } else if (sv.diem >= 6.5) {
        hocLuc = "Khá";
    } else if (sv.diem >= 5) {
        hocLuc = "Trung bình";
    } else {
        hocLuc = "Yếu";
    }

    // Hiển thị thông tin sinh viên và học lực
    let info = `Họ và tên: ${sv.hoTen}<br>Điểm: ${sv.diem}<br>Học lực: ${hocLuc}`;
    document.getElementById("student-info").innerHTML = info;
};
