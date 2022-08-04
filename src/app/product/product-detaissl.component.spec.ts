import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetaisslComponent } from './product-detaissl.component';

describe('ProductDetaisslComponent', () => {
  let component: ProductDetaisslComponent;
  let fixture: ComponentFixture<ProductDetaisslComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetaisslComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetaisslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
