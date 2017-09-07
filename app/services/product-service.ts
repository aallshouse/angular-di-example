import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';

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
    productResponse: any;
    
    constructor(private http:Http){
        let response = http.get('app/assets/products.json');
        // let mappedJson = response.map(res => {
        //     return res.json().results.map((item:any) => {
        //         return new Product(
        //             item.id,
        //             item.title,
        //             item.price,
        //             item.description
        //         );
        //     })
        // });
        // mappedJson.subscribe(data => {
        //     this.products = data;
        // });
        response.subscribe(success => {
            console.log('Status: ' + success.status)
            console.log(success.json());
        });
    }

    getProduct(): Product {
        //return this.products[0];
        return {
            "id": 0,
            "title": "test",
            "description": "test",
            "price": 1.00
        };
    }
}