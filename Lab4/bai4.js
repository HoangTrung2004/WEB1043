let newWindow;

document.getElementById('openBtn').onclick = function() {
    let width, height;

    // Kiểm tra trình duyệt
    if (navigator.userAgent.indexOf("MSIE") !== -1 || !!document.documentMode) {
        // IE
        width = 100;
        height = 100;
    } else {
        // Các trình duyệt khác
        width = 150;
        height = 150;
    }

    // Mở cửa sổ mới với các thuộc tính được chỉ định
    newWindow = window.open("", "", `toolbar=yes,menubar=yes,width=${width},height=${height}`);
};

document.getElementById('closeBtn').onclick = function() {
    if (newWindow) {
        newWindow.close();
    }
};

document.getElementById('checkBtn').onclick = function() {
    if (!newWindow || newWindow.closed) {
        alert("Cửa sổ mới đã được đóng.");
    } else {
        alert("Cửa sổ mới vẫn đang mở.");
    }
};
