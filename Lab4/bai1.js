// Bước 1: Tạo một mảng lưu trữ các mặt hàng
let inventoryArray = [];

// Bước 2: Tạo 3 đối tượng item
let item1 = {
    name: "Laptop",
    model: "HP Pavilion",
    cost: 700,
    quantity: 10
};

let item2 = {
    name: "Smartphone",
    model: "iPhone 12",
    cost: 999,
    quantity: 15
};

let item3 = {
    name: "Headphones",
    model: "Sony WH-1000XM4",
    cost: 350,
    quantity: 20
};

// Bước 3: Đưa các đối tượng vào mảng chính bằng các phương thức mảng
inventoryArray.push(item1);
inventoryArray.push(item2);
inventoryArray.push(item3);

// Xuất inventory array bằng console
console.log("Inventory Array:", inventoryArray);

// Bước 4: Truy xuất quantity element của item thứ 3 bằng console
console.log("Quantity of the third item:", inventoryArray[2].quantity);

// Bước 5: Thêm và truy xuất thêm các elements khác từ main array
// Thêm một item mới
let item4 = {
    name: "Tablet",
    model: "Samsung Galaxy Tab",
    cost: 400,
    quantity: 25
};

inventoryArray.push(item4);

// Xuất inventory array sau khi thêm item mới
console.log("Updated Inventory Array:", inventoryArray);

// Truy xuất thuộc tính name của item thứ 4
console.log("Name of the fourth item:", inventoryArray[3].name);
