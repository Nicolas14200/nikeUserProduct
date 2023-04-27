import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/ProductRepository";

export class InMemoryProductRepository implements ProductRepository{
    listProduct: Product[] = [];
    async getById(productId: string): Promise<Product> {
        const product = this.listProduct.find(product=>{
            return product.properties.id == productId;
        })
        if (!product){
            throw new Error("PRODUCT_NOT_EXIST");
        }
        return product;
        
    }
    async saveProduct(product: Product): Promise<Product> {
        if (!product){
            throw new Error("PRODUCT_NOT_CONFORM");
        }
        this.listProduct.push(product);
        return product;
    }
    
}