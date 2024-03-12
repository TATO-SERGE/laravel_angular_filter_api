import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsFilterComponent } from './product-details-filter.component';

describe('ProductDetailsFilterComponent', () => {
  let component: ProductDetailsFilterComponent;
  let fixture: ComponentFixture<ProductDetailsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetailsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
