var arrdm = [
  { iddm: 1, namedm: 'Áo thun', mota: "", loai: 1 },
  { iddm: 2, namedm: "Áo khoác", mota: "", loai: 2 },
  { iddm: 3, namedm: "Áo chống nắng", mota: "", loai: 1 },
  { iddm: 4, namedm: "Áo nam", mota: "", loai: 1 },
  { iddm: 5, namedm: "Áo nữ", mota: "", loai: 2 },
];
var arrsp = [
  { idsp: 1, namesp: "Áo Thun Nam Tay Raglan In Cao Greatest Day WTS 2418", img: "thun1.webp", price: 299000, price_sale: 400000, discount: 25, iddm: 1 },
  { idsp: 2, namesp: "Áo Thun Nữ Relax Dập Nổi Icon Love You WTS 2419", img: "thun2.webp", price: 299000, price_sale: 400000, discount: 25, iddm: 1 },
  { idsp: 6, namesp: "Áo Khoác Nữ Công Nghệ X-Jacket Version 4 WOP 2049", img: "sale1.webp", price: 299000, price_sale: 400000, discount: 25, iddm: 2 },
  {idsp: 8, namesp: "Áo Khoác Nữ UV Ninja Dáng Dài WOK 2068", img: "ao3.webp", price: 299000, price_sale: 400000, discount: 25, iddm: 2},
  { idsp: 3, namesp: "Áo Thun Nữ Relax Dập Nổi Icon Love You WTS 2419", img: "thun3.webp", price: 299000, price_sale: 400000, discount: 25, iddm: 1  },
  { idsp: 4, namesp: "Áo Thun Nam Relax Dập Nổi Icon Love You MTS 1419", img: "thun4.webp", price: 299000, price_sale: 400000, discount: 25, iddm: 1  },
  { idsp: 5, namesp: "Áo Thun Nam Relax Dập Nổi Icon Love You MTS 1419", img: "thunn.webp", price: 299000, price_sale: 400000, discount: 25, iddm: 1  },
  { idsp: 5, namesp: "Áo Thun Nam Relax Dập Nổi Icon Love You MTS 1419", img: "sale2.webp", price: 299000, price_sale: 400000, discount: 25, iddm: 2  },
  { idsp: 5, namesp: "Áo Khoác Nữ UV Ninja Dáng Dài WOK 2068", img: "chongNang1.webp", price: 799000, price_sale: 400000, discount: 25, iddm: 3  },
  { idsp: 5, namesp: "Áo Khoác Nữ UV Phối Màu Sun Mate WOK 2061", img: "chongNang2.webp", price: 699000, price_sale: 400000, discount: 25, iddm: 3  },
  { idsp: 5, namesp: "Áo Khoác Nữ UV Phối Màu Sun Mate WOK 2061", img: "chongNang3.webp", price: 699000, price_sale: 400000, discount: 25, iddm: 3  },
  { idsp: 2, namesp: "Áo Thun Nam Relax Dập Nổi Icon Love You WTS 2419", img: "nam.webp", price: 299000, price_sale: 400000, discount: 25, iddm: 1 },





];

function showdm() {
  let str = `<li onclick="showsp(0)">Tất cả</li>`; // cho "Tất cả" gọi showsp(0)

  for (let i = 0; i < arrdm.length; i++) {
    str += `<li><a href="#" onclick="showsp(${arrdm[i].iddm})">${arrdm[i].namedm}</a></li>`;
  }

  document.getElementById("dm").innerHTML = str;
}

function showsp(iddm = 0) {
  let str = ``;

  for (let i = 0; i < arrsp.length; i++) {
    // Nếu iddm = 0 (Tất cả) hoặc iddm trùng với sản phẩm
    if (iddm == 0 || arrsp[i].iddm == iddm) {
      str += `
        <div class="col25">
          <img src="/ASM/images/${arrsp[i].img}" alt="Product ${arrsp[i].idsp}">
          <div class="product-name">${arrsp[i].namesp}</div>
          <p class="price">${arrsp[i].price.toLocaleString()} VND 
              <span class="old-price">${arrsp[i].price_sale.toLocaleString()} VND</span>
          </p>
          <p class="discount">Giảm ${arrsp[i].discount}%</p>
          <button class="buy-button">Thêm vào giỏ hàng</button>
        </div>`;
    }
  }

  document.getElementById("sp").innerHTML = str;
}



function showspct(index) {
  let str = ` <div class="col2"><img src="img/${arrsp[index].img}" alt=""></div>
            <div class="col2">
                <div class="name">${arrsp[index].namesp}</div>
                <div class="price">${arrsp[index].price}</div>
                <div class="qty"><button>-</button><span id="qty">1</span><button>+</button></div>
                <button onclick="addcart(this,1)"><i class="fa-solid fa-cart-plus"></i></button>
            </div>`;
  document.getElementById("spct").innerHTML = str;
}
showspct(localStorage.getItem("index"));
showspct(arrsp[localStorage.getItem("index")].iddm);

function showct(p) {
  let;
}

function demsp(iddm) {
  let dem = 0;
  for (let i = 0; i < arrsp.length; i++) {
    if (arrsp[i].iddm == iddm) dem++;
  }
  return dem;
}
function displayNav(newThis) {
  var nav = newThis.querySelector(".select-nav");
  nav.style.display = "flex";
}
function hideNav(newThis) {
  var nav = newThis.querySelector(".select-nav");
  nav.style.display = "none";
}
