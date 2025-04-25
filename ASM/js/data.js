
    var bannerImages = [
        "images/banner_TX.png",
        "images/banner2.jpg",
        "images/banner3.png"
    ];

    var currentIndex = 0;

    function changeBanner(direction) {
        // Cập nhật chỉ số ảnh
        currentIndex = currentIndex + direction;

        // Kiểm tra nếu chỉ số vượt quá giới hạn mảng
        if (currentIndex >= bannerImages.length) {
            currentIndex = 0;
        }
        if (currentIndex < 0) {
            currentIndex = bannerImages.length - 1;
        }

        // Đổi ảnh banner
        var banner = document.getElementById("banner-img");
        banner.src = bannerImages[currentIndex];
    }

    // Tự động đổi ảnh mỗi 3 giây
    setInterval(function () {
        changeBanner(1);
    }, 3000);

    var arrsp = [
        { idsp: 1, namesp: "Áo Thun Nam Tay Raglan In Cao Greatest Day WTS 2418", img: "thun1.webp", price: 299000, price_sale: 400000, discount: 25 },
        { idsp: 2, namesp: "Áo Thun Nữ Tay Raglan In Cao Greatest Day WTS 2418", img: "thun2.webp", price: 299000, price_sale: 400000, discount: 25 },
        { idsp: 3, namesp: "Áo Thun Nữ Relax Dập Nổi Icon Love You WTS 2419", img: "thun3.webp", price: 299000, price_sale: 400000, discount: 25 },
        { idsp: 4, namesp: "Áo Thun Nam Relax Dập Nổi Icon Love You MTS 1419", img: "thun4.webp", price: 299000, price_sale: 400000, discount: 25 },
        { idsp: 5, namesp: "Áo Thun Nam Relax Dập Nổi Icon Love You MTS 1419", img: "thunn.webp", price: 299000, price_sale: 400000, discount: 25 },
        { idsp: 6, namesp: "Áo Khoác Nữ Công Nghệ X-Jacket Version 4 WOP 2049", img: "sale1.webp", price: 299000, price_sale: 400000, discount: 25 },
        { idsp: 7, namesp: "Áo Khoác Nam UV Phối Màu Sun Mate MOK 1061", img: "sale2.webp", price: 299000, price_sale: 400000, discount: 25 },
        { idsp: 8, namesp: "Áo Khoác Nữ UV Ninja Dáng Dài WOK 2068", img: "ao3.webp", price: 299000, price_sale: 400000, discount: 25 },
    ];

    function showsp() {
        let str = ``;

        for (let i = 0; i < arrsp.length; i++) {
            str += `
            <div class="col25">
                <img src="/ASM/images/${arrsp[i].img}" alt="Product ${arrsp[i].idsp}">
                <div class="product-name">${arrsp[i].namesp}</div>
                <p class="price">${arrsp[i].price.toLocaleString()} VND 
                    <span class="old-price">${arrsp[i].price_sale.toLocaleString()} VND</span>
                </p>
                <p class="discount">Giảm ${arrsp[i].discount}%</p>
                <!-- Sửa cú pháp trong sự kiện onclick -->
                <button class="buy-button" onclick="themVaoGio('${arrsp[i].namesp}', ${arrsp[i].price})">Thêm vào giỏ hàng</button>
            </div>`;
        }

        document.getElementById("sp").innerHTML = str;
    }

    // Gọi hàm để hiển thị sản phẩm
    showsp();






        function hienThiGioHang() {
            var gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];
            var hienThi = document.getElementById("danhSachGioHang");
            var tongTien = 0; // Biến tính tổng tiền
            var noiDung = "";

            if (gioHang.length === 0) {
                noiDung = "<p>Giỏ hàng của bạn đang trống.</p>";
            } else {
                noiDung = "<ul>";
                for (var i = 0; i < gioHang.length; i++) {
                    var sp = gioHang[i];

                    // Kiểm tra giá và số lượng trước khi sử dụng toLocaleString
                    var gia = sp.gia || 0;
                    var soLuong = sp.soLuong || 0;
                    var thanhTien = gia * soLuong;

                    // Cộng dồn tổng tiền
                    tongTien += thanhTien;

                    // Đảm bảo gia và thanhTien đều có giá trị hợp lệ
                    if (gia && soLuong) {
                        noiDung += "<li>" +
                            "<img src='images/" + sp.img + "' alt='" + sp.ten + "' style='width: 50px; height: 50px;'>" + // Hiển thị hình ảnh sản phẩm
                            " " + sp.ten + 
                            " - Giá: " + gia.toLocaleString() + " VNĐ" +
                            " - SL: " + soLuong +
                            " - Thành tiền: " + thanhTien.toLocaleString() + " VNĐ" +
                            " <button onclick=\"xoaSanPham('" + sp.ten + "')\">Xóa</button>" +
                            "</li>";
                    } else {
                        noiDung += "<li>" + sp.ten + " - Dữ liệu không hợp lệ</li>";
                    }
                }
                noiDung += "</ul>";

                // Hiển thị tổng tiền
                noiDung += "<p>Tổng tiền: " + tongTien.toLocaleString() + " VNĐ</p>";
            }

            hienThi.innerHTML = noiDung;
        }

        function themVaoGio(ten, gia, img) {
            // Kiểm tra nếu giá trị gia hợp lệ
            if (!gia || gia <= 0) {
                alert("Giá không hợp lệ!");
                return;
            }

            let gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];

            // Kiểm tra nếu sản phẩm đã có thì tăng số lượng
            let daCo = gioHang.find(sp => sp.ten === ten);
            if (daCo) {
                daCo.soLuong += 1;
            } else {
                gioHang.push({ ten: ten, gia: gia, soLuong: 1, img: img });
            }

            localStorage.setItem("gioHang", JSON.stringify(gioHang));
            alert("Đã thêm vào giỏ hàng!");
            hienThiGioHang();  // Gọi lại hàm hiển thị giỏ hàng sau khi thêm sản phẩm
        }

        function xoaSanPham(ten) {
            var gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];
            gioHang = gioHang.filter(sp => sp.ten !== ten);
            localStorage.setItem("gioHang", JSON.stringify(gioHang));
            hienThiGioHang();
        }

        // Gọi hàm để hiển thị giỏ hàng ngay khi trang được tải
        window.onload = hienThiGioHang;

