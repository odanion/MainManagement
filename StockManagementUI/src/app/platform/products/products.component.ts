import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductViewModel } from '../../core/dataContracts/productViewModel';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class ProductComponent implements OnInit {
  public products: ProductViewModel[] = [];
  constructor(private _productService: ProductService) {}
  
  public ngOnInit(): void {
    this._productService.getAll().subscribe({
      next: (receivedProducts: ProductViewModel[]) => {
        this.products = receivedProducts;
      },
      error: (err) => {
        console.error('Error fetching products', err);
      }
    })
  }

  public deleteProduct(productId: number): void {
    console.log(`Product with ID ${productId} deleted`);
  }
}
