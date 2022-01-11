import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightPageComponent } from './insight-page.component';

describe('InsightPageComponent', () => {
  let component: InsightPageComponent;
  let fixture: ComponentFixture<InsightPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
