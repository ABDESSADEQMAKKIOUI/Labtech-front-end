import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificatientsComponent } from './planificatients.component';

describe('PlanificatientsComponent', () => {
  let component: PlanificatientsComponent;
  let fixture: ComponentFixture<PlanificatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanificatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanificatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
