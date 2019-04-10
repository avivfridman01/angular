import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGetByDateComponent } from './company-get-by-date.component';

describe('CompanyGetByDateComponent', () => {
  let component: CompanyGetByDateComponent;
  let fixture: ComponentFixture<CompanyGetByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyGetByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyGetByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
