import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerationsComponent } from './numerations.component';

describe('NumerationsComponent', () => {
  let component: NumerationsComponent;
  let fixture: ComponentFixture<NumerationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
