// 初始化购物清单数组
let shoppingList = [
    { name: "牛奶", price: 12, quantity: 1 },
    { name: "鸡蛋", price: 8, quantity: 2 },
    { name: "面包", price: 15, quantity: 1 }
];

// 添加物品
function addItem() {
    // 检查购物清单是否已满
    if (shoppingList.length >= 5) {
        showErrorMessage("addItemError", "添加失败，购物车已满！");
        return;
    }

    const nameInput = document.getElementById("addItemName");
    const priceInput = document.getElementById("addItemPrice");
    const quantityInput = document.getElementById("addItemQuantity");

    const name = nameInput.value.trim();
    const price = priceInput.value.trim();
    const quantity = quantityInput.value.trim();

    // 检查输入是否为空
    if (!name || !price || !quantity) {
        showErrorMessage("addItemError", "物品名称、价格和数量不能为空！");
        return;
    }

    // 转换数据类型
    const priceValue = parseFloat(price);
    const quantityValue = parseInt(quantity, 10);

    // 检查数据有效性
    if (isNaN(priceValue) || isNaN(quantityValue) || priceValue <= 0 || quantityValue <= 0) {
        showErrorMessage("addItemError", "请输入有效的物品价格和数量！");
        return;
    }

    // 清除错误信息
    showErrorMessage("addItemError", "");

    // 添加到购物清单
    shoppingList.push({ name, price: priceValue, quantity: quantityValue });

    // 清空输入框
    nameInput.value = "";
    priceInput.value = "";
    quantityInput.value = "";

    // 更新显示
    updateShoppingListDisplay();
}


// 更新页面的购物清单
function updateShoppingListDisplay() {
    const shoppingListDisplay = document.getElementById("shopping-list-display");

    // 检查购物清单长度
    if (shoppingList.length > 5) {
        shoppingListDisplay.innerHTML = `
            <h2>购物清单：</h2>
            <p style="color: red; font-weight: bold;">您的购物车已满！</p>
        `;
    } else {
        shoppingListDisplay.innerHTML = `
            <h2>购物清单：</h2>
            <ul>
                ${shoppingList.map(item => `<li>${item.name} - 单价：${item.price} - 数量：${item.quantity}</li>`).join("")}
            </ul>
        `;
    }
}

// 显示错误信息
function showErrorMessage(targetId, message) {
    const target = document.getElementById(targetId);
    target.innerHTML = `<p style="color: red;">${message}</p>`;
}



// 删除物品
function deleteItem() {
    const nameInput = document.getElementById("deleteItemName");
    const name = nameInput.value.trim();

    // 验证输入
    if (!name) {
        showErrorMessage("deleteItemError", "请输入要删除的物品名称！");
        return;
    }

    // 查找并删除物品
    const initialLength = shoppingList.length;
    shoppingList = shoppingList.filter(item => item.name !== name);

    if (shoppingList.length === initialLength) {
        showErrorMessage("deleteItemError", `${name} 不在购物清单中，无法删除！`);
    } else {
        showErrorMessage("deleteItemError", "");
    }

    // 清空输入框
    nameInput.value = "";

    // 更新显示
    updateShoppingListDisplay();
}

// 初始化显示
updateShoppingListDisplay();
