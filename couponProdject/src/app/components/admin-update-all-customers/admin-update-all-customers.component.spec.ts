import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateAllCustomersComponent } from './admin-update-all-customers.component';

describe('AdminUpdateAllCustomersComponent', () => {
  let component: AdminUpdateAllCustomersComponent;
  let fixture: ComponentFixture<AdminUpdateAllCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUpdateAllCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateAllCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
