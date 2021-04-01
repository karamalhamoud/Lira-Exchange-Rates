var Currency = (function () {
    function Currency(CurrencyCode) {
        this.CurrencyCode = CurrencyCode;
    }
    return Currency;
}());
var Change;
(function (Change) {
    Change[Change["Up"] = 0] = "Up";
    Change[Change["Down"] = 1] = "Down";
})(Change || (Change = {}));
function Show_Price(Country) {
    var LiraPrice = new Currency(Country);
    var url = "https://karam-dev.000webhostapp.com/api.php?CurrencyCode=" + LiraPrice.CurrencyCode;
    fetch(url)
        .then(function (res) { return res.json(); })
        .then(function (out) {
        var objJSON = JSON.parse(JSON.stringify(out));
        LiraPrice.Buy = objJSON.buy;
        LiraPrice.Sell = objJSON.sell;
        LiraPrice.LastUpdate = objJSON.last_update;
        LiraPrice.Change = objJSON.change == "up" ? Change.Up : Change.Down;
        document.getElementById("USD_Buy_Text").innerHTML = LiraPrice.Buy;
        document.getElementById("USD_Sell_Text").innerHTML = LiraPrice.Sell;
        if (LiraPrice.Change = Change.Down) {
            document.getElementById("USD_Buy_Icon").className = "fa fa-arrow-down fa-xs";
            document.getElementById("USD_Sell_Icon").className = "fa fa-arrow-down fa-xs";
            document.getElementById("USD_Buy_Icon").style.color = "red";
            document.getElementById("USD_Sell_Icon").style.color = "red";
        }
        else {
            document.getElementById("USD_Buy_Icon").className = "fa fa-arrow-up fa-xs";
            document.getElementById("USD_Sell_Icon").className = "fa fa-arrow-up fa-xs";
            document.getElementById("USD_Buy_Icon").style.color = "green";
            document.getElementById("USD_Sell_Icon").style.color = "green";
        }
        document.getElementById("CurrencyCode_Buy").innerHTML = LiraPrice.CurrencyCode;
        document.getElementById("CurrencyCode_Sell").innerHTML = LiraPrice.CurrencyCode;
        document.getElementById("last_update").innerHTML = "Last Update: " + LiraPrice.LastUpdate;
    });
}
document.addEventListener("DOMContentLoaded", function (event) {
    Show_Price("SYP");
});
