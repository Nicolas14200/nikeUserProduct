import { currencyList } from "../resources/CurrencyListRepository";

export class VerifyProductCurrency {
    static execute (currencyArg: string) {
        const result = currencyList.find(currency => {
            return currencyArg === currency.code
        })
        if (!result){
            throw new Error ("CODE_CURRENCY_NOT_VALID");
        }
        return result;
    }
}