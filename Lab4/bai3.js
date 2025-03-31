// Hàm để cập nhật thời gian hiện tại
function updateTime() {
    // Tạo đối tượng Date mới
    let now = new Date();

    // Lấy các thành phần của ngày
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Định dạng giờ, phút và giây để luôn hiển thị 2 chữ số
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Chuỗi thời gian hoàn chỉnh
    let currentTime = `${hours}:${minutes}:${seconds}`;

    // Hiển thị thời gian lên trang web
    document.getElementById('time').innerText = currentTime;
}

// Gọi hàm updateTime mỗi giây
setInterval(updateTime, 1000);

// Gọi hàm updateTime ngay khi trang được tải để hiển thị thời gian ngay lập tức
updateTime();
