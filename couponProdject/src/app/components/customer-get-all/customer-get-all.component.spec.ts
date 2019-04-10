import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGetAllComponent } from './customer-get-all.component';

describe('CustomerGetAllComponent', () => {
  let component: CustomerGetAllComponent;
  let fixture: ComponentFixture<CustomerGetAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerGetAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
