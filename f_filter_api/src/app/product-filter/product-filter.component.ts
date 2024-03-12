import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { response } from 'express';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.scss'
})
export class ProductFilterComponent {
  data: any=[];
  select_categories: any =[];
  filter_data:any =[];
 
  constructor (private dataService:DataService){}
  ngOnInit(): void{
    this.getProducts()
  }

  getProducts(){
    this.dataService.getProducts().subscribe(response=>{
      this.data =response;
     
    });
  }

  getFilterData(){
   
    
    const pars = this.select_categories.map((str:any)=>{ 
      return parseInt(str);
    });

    const data = {
      selected_categories:pars,
    }
    console.log(pars);
    
    this.dataService.getFilteredProduct(data).subscribe(response => {
      this.filter_data =response;
    })
  }

  productFilter( event: any ){
    
    if(event.target.checked){
      
      this.select_categories.push(event.target.id);
    }else{
      const id = event.target.id;
      for(let data of this.select_categories){
        if(data === id){
          const index = this.select_categories.indexOf(data);
          this.select_categories.splice(index,1);
          
        }
      }
    }
  }

 
 
}
