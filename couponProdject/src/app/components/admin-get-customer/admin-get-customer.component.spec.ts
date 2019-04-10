import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetCustomerComponent } from './admin-get-customer.component';

describe('AdminGetCustomerComponent', () => {
  let component: AdminGetCustomerComponent;
  let fixture: ComponentFixture<AdminGetCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGetCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
