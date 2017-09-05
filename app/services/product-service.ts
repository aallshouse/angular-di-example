import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

export class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public description: string) {}
}

@Injectable()
export class ProductService {
    products: Product[];
    
    constructor(private http:Http){
        let productResponse = http.get('products.json');
    }

    getProduct(): Product {
        return this.products[0];
    }
}