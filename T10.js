import { ExponentialCost, FreeCost, LinearCost } from "./api/Costs";
import { Localization } from "./api/Localization";
import { BigNumber } from "./api/BigNumber";
import { theory } from "./api/Theory";
import { Utils } from "./api/Utils";

var id = "Laiz_Resturant";
var name = "Laiz Resturant";
var description = "THIS IS MY CUSTOM THEORY LOL";
var authors = "QR Name";
var version = "1.0.0";

var currency, currency2;
var r1;

var init = () => {
  currency = theory.createCurrency();
  currency2 = theory.createCurrency();

  {
        let getDesc = (level) => "r_1=" getR1(r1.level);
        let getInfo = (level) => "r_1=" getR1(r1.level);
        r1 = theory.createUpgrade(0, currency, new FirstFreeCost(new ExponentialCost(250, 1.5)));
        r1.getDescription = (_) => Utils.getMath(getDesc(r1.level));
        r1.getInfo = (amount) => Utils.getMathTo(getInfo(r1.level), getInfo(r1.level + amount));
  }
}

init();
