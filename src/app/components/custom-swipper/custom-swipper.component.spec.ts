import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSwipperComponent } from './custom-swipper.component';

describe('CustomSwipperComponent', () => {
  let component: CustomSwipperComponent;
  let fixture: ComponentFixture<CustomSwipperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSwipperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomSwipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
