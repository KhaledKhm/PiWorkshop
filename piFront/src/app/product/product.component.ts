import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Product } from '../product';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  listProducts : any; 
  form : boolean = false;
   product!: Product;
   closeResult! : string;

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
    
    console.log("add" +p.price);
    console.log("add" +p);
    this.productService.addProduct(p).subscribe(() => {
      this.getAllProducts();
      this.form = false;
    });
  }
  
  editProduct(pro: Product) {
    console.log("edit " +pro.price);
    
    console.log(pro);
    this.productService.editProduct(pro).subscribe();
  }

  deleteProduct(idProduct: any) {
    this.productService.deleteProduct(idProduct).subscribe(()=> this.getAllProducts());
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    }
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
    closeForm(){
  
    }
    cancel(){
      this.form = false;
    }

}
