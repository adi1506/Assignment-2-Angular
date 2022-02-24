import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearingTypeComponent } from './clearing-type.component';

describe('ClearingTypeComponent', () => {
  let component: ClearingTypeComponent;
  let fixture: ComponentFixture<ClearingTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearingTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
