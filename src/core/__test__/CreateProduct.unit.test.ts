import { Product } from "../entities/Product";
import { InMemoryProductRepository } from "../resources/InMemoryProductRepository"
import { Category } from "../type/EnumCategory";
import { Gender } from "../type/EnumGender";
import { CreateProduct } from "../usecase/CreateProduct";

describe("Unit - CreateProduct", () => {
    it("create product", async () => {
        const productRepo = new InMemoryProductRepository();
        const createProduct = new CreateProduct(productRepo);
        const product = Product.create({
            title: "string",
            desciption: "string",
            gender: Gender.men,
            category: Category.accessories,
            brand: "string",
        })
        product.properties.amount.push({
            price : -100,
            currency : "EUR",
        })
        product.properties.size.push({
            size: 50,
            country: "FR",
        })
        const result = await createProduct.execute(product) as Product;
        console.log("result =========>", result)
        expect(result.properties.gender).toEqual("MEN")
    })
})