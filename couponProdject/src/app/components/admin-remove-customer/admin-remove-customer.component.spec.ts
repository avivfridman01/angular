import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRemoveCustomerComponent } from './admin-remove-customer.component';

describe('AdminRemoveCustomerComponent', () => {
  let component: AdminRemoveCustomerComponent;
  let fixture: ComponentFixture<AdminRemoveCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRemoveCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRemoveCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
