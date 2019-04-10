import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGetAllTypeComponent } from './customer-get-all-type.component';

describe('CustomerGetAllTypeComponent', () => {
  let component: CustomerGetAllTypeComponent;
  let fixture: ComponentFixture<CustomerGetAllTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerGetAllTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGetAllTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
