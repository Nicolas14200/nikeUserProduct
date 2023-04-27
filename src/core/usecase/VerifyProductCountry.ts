import { countryListAlpha2Repository } from "../resources/CountryListAlpha2Repository";

export class VerifyProductCountry {
    static execute(country: string){
        const result = countryListAlpha2Repository.find(alphaCode => {
            return country === alphaCode;
        })
        if(!result){
            throw new Error ("CODE_COUNTRY_ISO2_NOT_VALID");
        }
        return result;
        
        
    }
}