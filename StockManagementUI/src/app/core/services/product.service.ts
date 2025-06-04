import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProductModel } from '../dataContracts/createProductModel';
import { ProductViewModel } from '../dataContracts/productViewModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = 'http://localhost:1111/api';
  constructor(private http: HttpClient) { }

  public create(productToCreate: CreateProductModel): Observable<ProductViewModel> {
    return this.http.post<ProductViewModel>(`${this.url}/product`, productToCreate);
  }

  public getAll(): Observable<ProductViewModel[]> {
    return this.http.get<ProductViewModel[]>(`${this.url}/product`)
  }
}
