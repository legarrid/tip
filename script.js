var tipAmount = 0;
var calculateTip = function (i) {
    var billAmount = document.getElementById("billAmount").value;    
    
    tipAmount = billAmount * i;
    document.getElementById("amountToTip").innerHTML = "$" + tipAmount.toFixed(2);
    
    var billTotal = parseFloat(tipAmount) + parseFloat(billAmount);
    
    document.getElementById("totalBill").innerHTML = "$" + billTotal.toFixed(2);
}