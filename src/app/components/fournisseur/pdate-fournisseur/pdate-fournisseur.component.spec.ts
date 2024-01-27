import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdateFournisseurComponent } from './pdate-fournisseur.component';

describe('PdateFournisseurComponent', () => {
  let component: PdateFournisseurComponent;
  let fixture: ComponentFixture<PdateFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdateFournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdateFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
