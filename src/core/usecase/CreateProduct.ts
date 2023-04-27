import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/ProductRepository";
import { VerifyProductCountry } from "./VerifyProductCountry";
import { VerifyProductCurrency } from "./VerifyProductCurrency";


export class CreateProduct {
    productRepository: ProductRepository;
    static productRepository: any;
    constructor(productRepository: ProductRepository){
        this.productRepository = productRepository;
    }
    async execute( product: Product){
        if (product.properties.amount[0].price < 0){
            throw new Error ("PRICE_INCORRECT");
        }
        if (!VerifyProductCountry.execute(product.properties.size[0].country)){
            throw new Error ("COUNTRY_CODE_INCORRECT");
        }
        if (!VerifyProductCurrency.execute(product.properties.amount[0].currency)){
            throw new Error ("CURRENCY_CODE_INCORRECT");
        }
        this.productRepository.saveProduct(product);
        return product;
    }
}