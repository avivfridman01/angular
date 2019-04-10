import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateAllCompaniesComponent } from './admin-update-all-companies.component';

describe('AdminUpdateAllCompaniesComponent', () => {
  let component: AdminUpdateAllCompaniesComponent;
  let fixture: ComponentFixture<AdminUpdateAllCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUpdateAllCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateAllCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
