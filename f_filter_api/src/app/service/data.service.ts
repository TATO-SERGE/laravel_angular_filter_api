import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { 

  }

  getProducts(){
    return this.http.get(environment.apiUrl +'/products');
  }
  getFilteredProduct(data:any){
       return this.http.post(environment.apiUrl +'/products/fetch_multi_prods', data);
  }

}
