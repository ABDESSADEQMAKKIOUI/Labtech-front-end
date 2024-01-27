import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNumerationComponent } from './add-numeration.component';

describe('AddNumerationComponent', () => {
  let component: AddNumerationComponent;
  let fixture: ComponentFixture<AddNumerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNumerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNumerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
