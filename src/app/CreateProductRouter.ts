import { Router, Request, Response } from "express";
import { InMemoryProductRepository } from "../core/resources/InMemoryProductRepository";
import { CreateProduct } from "../core/usecase/CreateProduct";
import { Product } from "../core/entities/Product";
import { Gender } from "../core/type/EnumGender";
import { Category } from "../core/type/EnumCategory";

const CreateProductRouter: Router = Router();
const productRepo = new InMemoryProductRepository();
const createProduct = new CreateProduct(productRepo);
CreateProductRouter.post("/create/product", (req: Request, res: Response) => {
  const product = Product.create({
    title: req.body.title,
    desciption: "un truc",
    gender: Gender.men,
    category: Category.accessories,
    brand: "mark",
  });
  product.properties.amount.push({
    price: 100,
    currency: "EUR",
  });
  product.properties.size.push({
    size: 50,
    country: "FR",
  });
  createProduct.execute(product);
  return res.status(202).send(product);
});
export {CreateProductRouter};
