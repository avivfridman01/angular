import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGetAllPriceComponent } from './customer-get-all-price.component';

describe('CustomerGetAllPriceComponent', () => {
  let component: CustomerGetAllPriceComponent;
  let fixture: ComponentFixture<CustomerGetAllPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerGetAllPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGetAllPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
