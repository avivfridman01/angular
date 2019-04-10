import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRemoveCompanyComponent } from './admin-remove-company.component';

describe('AdminRemoveCompanyComponent', () => {
  let component: AdminRemoveCompanyComponent;
  let fixture: ComponentFixture<AdminRemoveCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRemoveCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRemoveCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
