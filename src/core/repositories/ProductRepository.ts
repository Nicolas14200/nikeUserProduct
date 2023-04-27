import { Product } from "../entities/Product";

export interface ProductRepository{
    getById(productId: string):Promise<Product>;
    saveProduct(product: Product):Promise<Product>;
}