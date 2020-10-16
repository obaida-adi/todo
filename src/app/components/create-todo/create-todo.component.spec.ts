import { TestBed, async } from '@angular/core/testing';
import { CreateTodoComponent } from './create-todo.component';

describe('ListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreateTodoComponent
      ],
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(CreateTodoComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
