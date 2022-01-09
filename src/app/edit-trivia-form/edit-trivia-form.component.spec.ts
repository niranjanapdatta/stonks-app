import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTriviaFormComponent } from './edit-trivia-form.component';

describe('EditTriviaFormComponent', () => {
  let component: EditTriviaFormComponent;
  let fixture: ComponentFixture<EditTriviaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTriviaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTriviaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
