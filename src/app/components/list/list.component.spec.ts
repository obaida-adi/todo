import { TestBed, async } from '@angular/core/testing';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListComponent
      ],
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
