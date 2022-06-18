class Currency {
    CurrencyCode: string;
    constructor(CurrencyCode?: string) {
        this.CurrencyCode = CurrencyCode;
    }
    public Sell: string;
    public Buy: string;
    public Change: Change;
    public LastUpdate: string;
}

enum Change {
    Up,
    Down
}

function Show_Price(Country: string) {
    var LiraPrice = new Currency(Country);
    var url = "api.php?CurrencyCode=" + LiraPrice.CurrencyCode;

    fetch(url)
        .then(res => res.json())
        .then((out) => {
            var objJSON = JSON.parse(JSON.stringify(out))
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
            } else {
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
