import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGetByPriceComponent } from './company-get-by-price.component';

describe('CompanyGetByPriceComponent', () => {
  let component: CompanyGetByPriceComponent;
  let fixture: ComponentFixture<CompanyGetByPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyGetByPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyGetByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
