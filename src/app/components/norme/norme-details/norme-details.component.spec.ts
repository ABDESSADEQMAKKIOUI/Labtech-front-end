import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormeDetailsComponent } from './norme-details.component';

describe('NormeDetailsComponent', () => {
  let component: NormeDetailsComponent;
  let fixture: ComponentFixture<NormeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
