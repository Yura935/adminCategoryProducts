import { ICategory } from '../interfaces/category.interface';
import { IProduct } from '../interfaces/product.interface';

export class Product implements IProduct{
    constructor(
        public id: number | string,
        public category: ICategory,
        public name: string,
        public description: string,
        public price: number | string,
        public image: string
    ){}
}