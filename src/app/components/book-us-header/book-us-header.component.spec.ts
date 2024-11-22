import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUsHeaderComponent } from './book-us-header.component';

describe('BookUsHeaderComponent', () => {
  let component: BookUsHeaderComponent;
  let fixture: ComponentFixture<BookUsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookUsHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookUsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
