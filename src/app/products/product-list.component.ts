import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWith: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string;
  filteredProducts: IProduct[];
  products: IProduct[] = [];
  errorMessage: string;

  constructor(private _productService: ProductService) {

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(
        products => {
          this.products = products,
          this.filteredProducts = this.products;
        },
        error => this.errorMessage = <any>error
      );

  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
}
}
