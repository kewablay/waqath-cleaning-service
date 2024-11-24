import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUsContentComponent } from './book-us-content.component';

describe('BookUsContentComponent', () => {
  let component: BookUsContentComponent;
  let fixture: ComponentFixture<BookUsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookUsContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookUsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
