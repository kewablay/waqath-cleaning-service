import { Component, Input } from '@angular/core';
import { Testimonial } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.sass'
})
export class TestimonialCardComponent {
  @Input() testimonial!: Testimonial

}
