import { VerifyProductCountry } from "../usecase/VerifyProductCountry";

describe('Unit - VerifyProductCountry', () => {
    it ("verify country iso 2", async () => {
        const country = VerifyProductCountry.execute("FR")
        expect(country).toEqual("FR");
    })
})