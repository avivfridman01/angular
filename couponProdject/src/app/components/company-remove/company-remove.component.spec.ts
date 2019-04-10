import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRemoveComponent } from './company-remove.component';

describe('CompanyRemoveComponent', () => {
  let component: CompanyRemoveComponent;
  let fixture: ComponentFixture<CompanyRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
