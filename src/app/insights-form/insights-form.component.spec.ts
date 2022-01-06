import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsFormComponent } from './insights-form.component';

describe('InsightsFormComponent', () => {
  let component: InsightsFormComponent;
  let fixture: ComponentFixture<InsightsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
