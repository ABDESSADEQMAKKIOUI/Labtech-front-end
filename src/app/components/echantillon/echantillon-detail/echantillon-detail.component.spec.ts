import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchantillonDetailComponent } from './echantillon-detail.component';

describe('EchantillonDetailComponent', () => {
  let component: EchantillonDetailComponent;
  let fixture: ComponentFixture<EchantillonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchantillonDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchantillonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
