function calculate() {
    let days = parseFloat(document.getElementById("days").value);
    let usage = parseFloat(document.getElementById("usage").value);

    // 基本料金・従量料金のテーブル
    let baseRates = { A: 755.00, B: 1080.00, C: 2283.60 };
    let unitRates = { A: 451.83, B: 411.20, C: 371.08 };

    // 1カ月換算使用量の計算
    let monthlyUsage = (usage / days) * 30;

    // 使用量に応じた料金グループを決定
    let baseRate, unitRate;

    if (monthlyUsage <= 8) {
        baseRate = baseRates.A;
        unitRate = unitRates.A;
    } else if (monthlyUsage <= 30) {
        baseRate = baseRates.B;
        unitRate = unitRates.B;
    } else {
        baseRate = baseRates.C;
        unitRate = unitRates.C;
    }

    // 基本料金の計算（日割り）
    let baseFee = Math.floor((days / 30) * baseRate);
    
    // 従量料金の計算（実際の使用量で計算）
    let volumeFee = usage > 0 ? Math.floor(usage * unitRate) : 0;
    
    // 小計
    let subtotal = baseFee + volumeFee;
    
    // 消費税（10%）
    let tax = Math.floor(subtotal * 0.1);

    // 警報器リース料金（日割り）
    let alarmRental = Math.floor((days / 30) * 150);
    
    // 警報器消費税（10%）
    let alarmTax = Math.floor(alarmRental * 0.1);

    // 合計
    let total = subtotal + tax + alarmRental + alarmTax;

    // 結果表示
    document.getElementById("result").innerHTML = `
        <p>【1カ月換算使用量】: ${monthlyUsage.toFixed(2)}㎥</p>
        <p>【基本料金】: ¥${baseFee}</p>
        <p>【従量料金】: ¥${volumeFee}</p>
        <p>【小計】: ¥${subtotal}</p>
        <p>【消費税】: ¥${tax}</p>
        <hr>
        <p>【警報器リース料金】: ¥${alarmRental}</p>
        <p>【(警報器)消費税】: ¥${alarmTax}</p>
        <hr>
        <p><strong>【合計】: ¥${total}</strong></p>
    `;
}