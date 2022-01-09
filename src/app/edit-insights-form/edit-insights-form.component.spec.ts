import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInsightsFormComponent } from './edit-insights-form.component';

describe('EditInsightsFormComponent', () => {
  let component: EditInsightsFormComponent;
  let fixture: ComponentFixture<EditInsightsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInsightsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInsightsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
