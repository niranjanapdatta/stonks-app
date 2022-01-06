import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsListComponent } from './insights-list.component';

describe('InsightsListComponent', () => {
  let component: InsightsListComponent;
  let fixture: ComponentFixture<InsightsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
