import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/ProductRepository";

export interface GetProductByIdProperties {
  id: string;
}

export class GetProductById {
  productRepository: ProductRepository;
  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }
  async execute(props: GetProductByIdProperties): Promise<Product> {
    const product = this.productRepository.getById(props.id);
    if (!product) {
      throw new Error("PRODUCT_NOT_FOUND");
    }
    return product;
  }
}
