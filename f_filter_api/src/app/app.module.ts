import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductDetailsFilterComponent } from './product-details-filter/product-details-filter.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
 {path: '',component:ProductFilterComponent},
 {path: 'product-details',component:ProductDetailsFilterComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductFilterComponent,
    ProductDetailsFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(routes), 
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
