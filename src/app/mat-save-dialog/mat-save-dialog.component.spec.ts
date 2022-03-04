import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSaveDialogComponent } from './mat-save-dialog.component';

describe('MatSaveDialogComponent', () => {
  let component: MatSaveDialogComponent;
  let fixture: ComponentFixture<MatSaveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatSaveDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
