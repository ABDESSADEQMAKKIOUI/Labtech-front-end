import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactifDetailComponent } from './reactif-detail.component';

describe('ReactifDetailComponent', () => {
  let component: ReactifDetailComponent;
  let fixture: ComponentFixture<ReactifDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactifDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactifDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
