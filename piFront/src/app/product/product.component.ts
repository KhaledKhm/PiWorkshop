import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { throws } from 'assert';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  listProducts: any;
  from: boolean = false;
  product!: Product;
  closeResult!: string;

  constructor(private productService: ProductService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllProducts();

    this.product = {
      id_product: null,
      title: null,
      price: null,
      quantity: null
    }
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(res => this.listProducts = res)
  }

  addProduct(p: any){
    this.productService.addProduct(p).subscribe(() => {
      this.getAllProducts();
      this.from = false;
    });
  }

  editProduct(product: Product) {
    this.productService.editProduct(product).subscribe();
  }

  deleteProduct(idProduct: any) {
    this.productService.deleteProduct(idProduct).subscribe(()=> this.getAllProducts());
  }

}
