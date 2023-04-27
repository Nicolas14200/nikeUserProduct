import { VerifyProductCurrency } from "../usecase/VerifyProductCurrency";


describe("Unit - VerifyProductCurrency", () => {
    it("verify the currency of product", async () => {
        const currency = VerifyProductCurrency.execute("EUR");
        expect(currency.code).toEqual("EUR")
    })
})