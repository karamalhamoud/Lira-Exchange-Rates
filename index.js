"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Currency = /** @class */ (function () {
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
    return __awaiter(this, void 0, void 0, function () {
        var LiraPrice;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    LiraPrice = new Currency(Country);
                    return [4 /*yield*/, GetPrice(LiraPrice.CurrencyCode)];
                case 1:
                    LiraPrice = _a.sent();
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
                    return [2 /*return*/];
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", function (event) {
    Show_Price("SYP");
});
function GetPrice(CurrencyCode) {
    return __awaiter(this, void 0, void 0, function () {
        var currency, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    currency = new Currency(CurrencyCode);
                    url = "https://karam-dev.000webhostapp.com/api.php?CurrencyCode=" + currency.CurrencyCode;
                    return [4 /*yield*/, fetch(url)
                            .then(function (res) { return res.json(); })
                            .then(function (out) {
                            var objJSON = JSON.parse(JSON.stringify(out));
                            currency.Buy = objJSON.buy;
                            currency.Sell = objJSON.sell;
                            currency.LastUpdate = objJSON.last_update;
                            currency.Change = objJSON.change == "up" ? Change.Up : Change.Down;
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, currency];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,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R0FBRzs0QkFDTixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTs0QkFDN0MsUUFBUSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDOzRCQUMzQixRQUFRLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7NEJBQzdCLFFBQVEsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQzs0QkFDMUMsUUFBUSxDQUFDLE1BQU0sR0FBSSxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDeEUsQ0FBQyxDQUFDLEVBQUE7O29CQVJGLFNBUUUsQ0FBQztvQkFFSSxxQkFBTSxRQUFRLEVBQUE7d0JBQXJCLHNCQUFPLFNBQWMsRUFBQzs7OztDQUN6QiIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc3luYyB9IGZyb20gXCJxXCI7XHJcblxyXG5cclxuY2xhc3MgQ3VycmVuY3l7XHJcbiAgICBDdXJyZW5jeUNvZGU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKEN1cnJlbmN5Q29kZT86IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5DdXJyZW5jeUNvZGUgPSBDdXJyZW5jeUNvZGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgU2VsbDogc3RyaW5nO1xyXG4gICAgcHVibGljIEJ1eTogc3RyaW5nO1xyXG4gICAgcHVibGljIENoYW5nZTogQ2hhbmdlO1xyXG4gICAgcHVibGljIExhc3RVcGRhdGU6IHN0cmluZztcclxufVxyXG5cclxuZW51bSBDaGFuZ2V7XHJcbiAgICBVcCxcclxuICAgIERvd25cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gU2hvd19QcmljZShDb3VudHJ5OiBzdHJpbmcpe1xyXG4gICAgdmFyIExpcmFQcmljZSA9IG5ldyBDdXJyZW5jeShDb3VudHJ5KTtcclxuICAgIExpcmFQcmljZSA9IGF3YWl0IEdldFByaWNlKExpcmFQcmljZS5DdXJyZW5jeUNvZGUpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJVU0RfQnV5X1RleHRcIikuaW5uZXJIVE1MID0gTGlyYVByaWNlLkJ1eTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVVNEX1NlbGxfVGV4dFwiKS5pbm5lckhUTUwgPSBMaXJhUHJpY2UuU2VsbDtcclxuICAgIGlmKExpcmFQcmljZS5DaGFuZ2UgPSBDaGFuZ2UuRG93bil7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJVU0RfQnV5X0ljb25cIikuY2xhc3NOYW1lID0gXCJmYSBmYS1hcnJvdy1kb3duIGZhLXhzXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJVU0RfU2VsbF9JY29uXCIpLmNsYXNzTmFtZSA9IFwiZmEgZmEtYXJyb3ctZG93biBmYS14c1wiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVVNEX0J1eV9JY29uXCIpLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlVTRF9TZWxsX0ljb25cIikuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJVU0RfQnV5X0ljb25cIikuY2xhc3NOYW1lID0gXCJmYSBmYS1hcnJvdy11cCBmYS14c1wiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVVNEX1NlbGxfSWNvblwiKS5jbGFzc05hbWUgPSBcImZhIGZhLWFycm93LXVwIGZhLXhzXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJVU0RfQnV5X0ljb25cIikuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJVU0RfU2VsbF9JY29uXCIpLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJDdXJyZW5jeUNvZGVfQnV5XCIpLmlubmVySFRNTCA9IExpcmFQcmljZS5DdXJyZW5jeUNvZGU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkN1cnJlbmN5Q29kZV9TZWxsXCIpLmlubmVySFRNTCA9IExpcmFQcmljZS5DdXJyZW5jeUNvZGU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhc3RfdXBkYXRlXCIpLmlubmVySFRNTCA9IFwiTGFzdCBVcGRhdGU6IFwiICsgTGlyYVByaWNlLkxhc3RVcGRhdGU7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7IFxyXG4gICAgU2hvd19QcmljZShcIlNZUFwiKTtcclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRQcmljZShDdXJyZW5jeUNvZGU6IHN0cmluZyl7XHJcbiAgICB2YXIgY3VycmVuY3kgPSBuZXcgQ3VycmVuY3koQ3VycmVuY3lDb2RlKTtcclxuICAgIHZhciB1cmwgPSBcImh0dHBzOi8va2FyYW0tZGV2LjAwMHdlYmhvc3RhcHAuY29tL2FwaS5waHA/Q3VycmVuY3lDb2RlPVwiICsgY3VycmVuY3kuQ3VycmVuY3lDb2RlO1xyXG5cclxuICAgIGF3YWl0IGZldGNoKHVybClcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4oKG91dCkgPT4ge1xyXG4gICAgICAgIHZhciBvYmpKU09OID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvdXQpKVxyXG4gICAgICAgIGN1cnJlbmN5LkJ1eSA9IG9iakpTT04uYnV5O1xyXG4gICAgICAgIGN1cnJlbmN5LlNlbGwgPSBvYmpKU09OLnNlbGw7XHJcbiAgICAgICAgY3VycmVuY3kuTGFzdFVwZGF0ZSA9IG9iakpTT04ubGFzdF91cGRhdGU7XHJcbiAgICAgICAgY3VycmVuY3kuQ2hhbmdlID0gIG9iakpTT04uY2hhbmdlID09IFwidXBcIiA/IENoYW5nZS5VcCA6IENoYW5nZS5Eb3duO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IGN1cnJlbmN5O1xyXG59Il19
