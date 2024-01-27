import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNumerationComponent } from './update-numeration.component';

describe('UpdateNumerationComponent', () => {
  let component: UpdateNumerationComponent;
  let fixture: ComponentFixture<UpdateNumerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNumerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateNumerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
