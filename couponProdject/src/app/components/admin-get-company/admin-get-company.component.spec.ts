import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetCompanyComponent } from './admin-get-company.component';

describe('AdminGetCompanyComponent', () => {
  let component: AdminGetCompanyComponent;
  let fixture: ComponentFixture<AdminGetCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGetCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
