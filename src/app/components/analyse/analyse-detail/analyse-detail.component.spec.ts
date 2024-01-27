import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseDetailComponent } from './analyse-detail.component';

describe('AnalyseDetailComponent', () => {
  let component: AnalyseDetailComponent;
  let fixture: ComponentFixture<AnalyseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
