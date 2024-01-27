import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnalysesComponent } from './update-analyses.component';

describe('UpdateAnalysesComponent', () => {
  let component: UpdateAnalysesComponent;
  let fixture: ComponentFixture<UpdateAnalysesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAnalysesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAnalysesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
