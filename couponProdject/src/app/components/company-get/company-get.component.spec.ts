import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGetComponent } from './company-get.component';

describe('CompanyGetComponent', () => {
  let component: CompanyGetComponent;
  let fixture: ComponentFixture<CompanyGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
