import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { ProductService } from "../services/product.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  displayedColumns = ['select', 'name', 'edit', 'delete'];
  product: Product;
  products: Product[];
  selection = new SelectionModel<Product>(true, []);
  dataSource = new MatTableDataSource<Product>(this.products);
  showDeleteConfirm:Boolean = false;
  productToDel:Product;

  constructor(
    private productService:ProductService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.getProducts(params));
  }

  getProducts(params){
    this.productService.getProducts(params)
                       .subscribe(
                         data => {
                           console.log(data)
                           this.products = data['products'];
                           this.dataSource = new MatTableDataSource<Product>(this.products);
                         },
                         error => {
                           console.log(error);
                         }
                       )
  }

  showEditAlert(p){
    
  }
  
  showDeleteAlert(p){
    this.showDeleteConfirm = true;
    this.productToDel = p;
  }

  cancelDelete(){
    this.showDeleteConfirm = false;
  }

  confirmDelete(){
    if (this.productToDel) {
      this.productService.deleteProduct(this.productToDel)
                         .subscribe(
                           resp => {
                             console.log(resp);
                             if(resp['success']){
                              let deletedProduct = resp['product'];
                              this.products = this.products.filter((p) => p['_id'] !== deletedProduct._id);
                            this.dataSource = new MatTableDataSource<Product>(this.products);
                            this.showDeleteConfirm = false;
                             }
                           },
                           error => {
                            console.log(error);
                          }
                         )
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
 isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
}

}
