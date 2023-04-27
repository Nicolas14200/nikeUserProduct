import { Category } from "../type/EnumCategory";
import { Gender } from "../type/EnumGender";
import { PriceCurrency } from "../type/PriceCurrency";
import { SizeContry } from "../type/SizeContry";
import  {uuid}  from "uuidv4"
export interface ProductProperties {
    id: string;
    modelId: string[];
    size: SizeContry[];
    title: string;
    amount:PriceCurrency[];
    desciption: string;
    gender: Gender;
    picture: string[];
    category: Category;
    brand: string;
}

export class Product {
    properties: ProductProperties;

    constructor(properties: ProductProperties){
        this.properties = properties;
    }
    static create(properties: {
        title: string;
        desciption: string;
        gender: Gender;
        category: Category;
        brand: string;
    }){
        return new Product({
            id: uuid(),
            modelId: [],
            size: [],
            amount:[],
            picture: [],
            ...properties
        })
    }
}