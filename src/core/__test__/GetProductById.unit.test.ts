import { Product } from "../entities/Product";
import { InMemoryProductRepository } from "../resources/InMemoryProductRepository";
import { Category } from "../type/EnumCategory";
import { Gender } from "../type/EnumGender";
import { CreateProduct } from "../usecase/CreateProduct";
import { GetProductById } from "../usecase/GetProductById";

describe("Unit - GetProductById", () => {
    it ("get product by id", async () => {
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
            price : 100,
            currency : "EUR",
        })
        createProduct.execute(product);
        const getProductById = new GetProductById(productRepo)
        const id = product.properties.id;
        const result = await getProductById.execute({id:id});
        const idControl = result.properties.id;
        expect(idControl).toEqual(id);
    })
})