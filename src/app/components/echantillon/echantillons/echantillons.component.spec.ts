import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchantillonsComponent } from './echantillons.component';

describe('EchantillonsComponent', () => {
  let component: EchantillonsComponent;
  let fixture: ComponentFixture<EchantillonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchantillonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchantillonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
