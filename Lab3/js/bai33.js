let operand1 = "";
let operand2 = "";
let operator = null;

function inputNumber(num) {
  const display = document.getElementById("display");
  if (operator === null) {
    // Nếu chưa có toán tử, thêm số vào operand1
    operand1 += num;
  } else {
    // Nếu đã có toán tử, thêm số vào operand2
    operand2 += num;
  }
  // Cập nhật hiển thị
  display.innerText =
    operand1 + (operator !== null ? " " + operator + " " : "") + operand2;
}

function setOperator(op) {
  const display = document.getElementById("display");
  if (operand1 !== "") {
    // Chỉ đặt toán tử nếu đã nhập operand1
    operator = op;
    // Cập nhật hiển thị
    display.innerText = operand1 + " " + operator + " " + operand2;
  }
}

function calculate() {
  const display = document.getElementById("display");
  if (operand1 !== "" && operand2 !== "" && operator !== null) {
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(operand1) + parseFloat(operand2);
        break;
      case "-":
        result = parseFloat(operand1) - parseFloat(operand2);
        break;
      case "*":
        result = parseFloat(operand1) * parseFloat(operand2);
        break;
      case "/":
        result =
          operand2 === "0"
            ? "Error"
            : parseFloat(operand1) / parseFloat(operand2);
        break;
    }
    // Hiển thị kết quả
    display.innerText = result;
    // Đặt lại trạng thái
    operand1 = result.toString();
    operand2 = "";
    operator = null;
  }
}

function clearCalculator() {
  operand1 = "";
  operand2 = "";
  operator = null;
  document.getElementById("display").innerText = "0";
}
