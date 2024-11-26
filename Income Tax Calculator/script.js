function main() {
    // 验证输入值
    if (isNaN(income) || income < 0) {
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerText = "Please enter a valid income.";
        return;
      }
}

// 计算
function calculateTax() {
    const income = parseFloat(document.getElementById("income").value); // 获取收入
    let tax = 0;
  
    // 计算税额
    if (income <= 18200) {
      tax = 0;
    } else if (income <= 45000) {
      tax = (income - 18200) * 0.19;
    } else if (income <= 120000) {
      tax = 5092 + (income - 45000) * 0.325;
    } else if (income <= 180000) {
      tax = 29467 + (income - 120000) * 0.37;
    } else {
      tax = 51667 + (income - 180000) * 0.45;
    }
  
    // 结果
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `
      Your taxable income: <strong>$${income.toFixed(2)}</strong><br>
      Total tax: <strong>$${tax.toFixed(2)}</strong>
    `;
  }
  
