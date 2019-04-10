import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGetByTypeComponent } from './company-get-by-type.component';

describe('CompanyGetByTypeComponent', () => {
  let component: CompanyGetByTypeComponent;
  let fixture: ComponentFixture<CompanyGetByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyGetByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyGetByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
