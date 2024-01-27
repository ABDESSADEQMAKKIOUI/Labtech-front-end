import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnalysesComponent } from './add-analyses.component';

describe('AddAnalysesComponent', () => {
  let component: AddAnalysesComponent;
  let fixture: ComponentFixture<AddAnalysesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnalysesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAnalysesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
