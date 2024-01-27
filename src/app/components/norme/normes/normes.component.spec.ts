import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormesComponent } from './normes.component';

describe('NormesComponent', () => {
  let component: NormesComponent;
  let fixture: ComponentFixture<NormesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
