import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurDetailComponent } from './fournisseur-detail.component';

describe('FournisseurDetailComponent', () => {
  let component: FournisseurDetailComponent;
  let fixture: ComponentFixture<FournisseurDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseurDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
