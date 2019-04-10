import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGetAllComponent } from './company-get-all.component';

describe('CompanyGetAllComponent', () => {
  let component: CompanyGetAllComponent;
  let fixture: ComponentFixture<CompanyGetAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyGetAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
