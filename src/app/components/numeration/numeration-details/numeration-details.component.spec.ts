import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerationDetailsComponent } from './numeration-details.component';

describe('NumerationDetailsComponent', () => {
  let component: NumerationDetailsComponent;
  let fixture: ComponentFixture<NumerationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
