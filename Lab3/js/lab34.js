// Mảng lựa chọn
var arr = ["Búa", "Bao", "Kéo"];
var imgArr = ["bua.jpg", "bao.jpg", "keo.jpg"];

// Hàm xử lý khi người dùng chọn
function getValue(x) {
  var c = x; // Lựa chọn người chơi
  var s = Math.floor(Math.random() * 3); // Lựa chọn máy (0-2)

  var player = arr[c];
  var computer = arr[s];
  var message = `Bạn chọn: ${player}<br>Máy chọn: ${computer}<br>`;

  // Hiển thị hình ảnh kết quả
  document.getElementById("client").src = imgArr[c];
  document.getElementById("computer").src = imgArr[s];
  document.querySelector(".showResult").style.display = "flex";

  // So sánh kết quả
  if (c === s) {
    message += "Kết quả: Hòa!";
    document.getElementById("result").style.color = "black";
  } else {
    switch (c) {
      case 0: // Búa
        if (s === 2) {
          message += "Kết quả: Bạn thắng! (Búa thắng Kéo)";
          document.getElementById("result").style.color = "green";
        } else {
          message += "Kết quả: Bạn thua! (Bao thắng Búa)";
          document.getElementById("result").style.color = "red";
        }
        break;
      case 1: // Bao
        if (s === 0) {
          message += "Kết quả: Bạn thắng! (Bao thắng Búa)";
          document.getElementById("result").style.color = "green";
        } else {
          message += "Kết quả: Bạn thua! (Kéo thắng Bao)";
          document.getElementById("result").style.color = "red";
        }
        break;
      case 2: // Kéo
        if (s === 1) {
          message += "Kết quả: Bạn thắng! (Kéo thắng Bao)";
          document.getElementById("result").style.color = "green";
        } else {
          message += "Kết quả: Bạn thua! (Búa thắng Kéo)";
          document.getElementById("result").style.color = "red";
        }
        break;
    }
  }

  document.getElementById("result").innerHTML = message;
}