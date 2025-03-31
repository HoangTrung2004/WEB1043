var month = prompt("Nhập tháng: ");
var year = prompt("Nhập năm: ");

var day = new Date(year, month, 0).getDate();

alert("Tháng " +month + " năm " +year + " có " + day + " ngày");  // vIẾT RA HỘP THÔNG BÁO 
//document.writeln("Tháng " + month + " năm " + year + " có " + day + " ngày"); HIỆN RA BODY