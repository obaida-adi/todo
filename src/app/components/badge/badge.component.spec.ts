import { TestBed, async } from '@angular/core/testing';
import { BadgeComponent } from './badge.component';

describe('ListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BadgeComponent
      ],
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(BadgeComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
