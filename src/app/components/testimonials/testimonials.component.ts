import { Component } from '@angular/core';
import { CustomSwipperComponent } from '../custom-swipper/custom-swipper.component';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CustomSwipperComponent, TestimonialCardComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.sass',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        'Their attention to detail transformed my home completely. The team handled everything with care and professionalism, leaving every corner spotless.',
      author: 'Tony Smith',
      role: 'Business Owner',
      rating: 5,
      image: 'assets/images/profile-1.png',
    },
    {
      id: 2,
      quote:
        "I was amazed by how thorough their deep cleaning service was. They reached places I didn't even know needed cleaning, and now my apartment feels brand new.",
      author: 'Michael Chen',
      role: 'Software Engineer',
      rating: 5,
      image: 'assets/images/profile-2.png',
    },
    {
      id: 3,
      quote:
        "Working with them has been incredible. They're always on time, professional, and their cleaning standards are consistently high. My office has never looked better.",
      author: 'Emily Rodriguez',
      role: 'Restaurant Manager',
      rating: 5,
      image: 'assets/images/profile-3.png',
    },
    {
      id: 4,
      quote:
        "As a busy parent, having their reliable cleaning service has been life-changing. They're trustworthy, efficient, and always go above and beyond expectations.",
      author: 'David Thompson',
      role: 'Marketing Director',
      rating: 5,
      image: 'assets/images/testimonials/testimonial-4.jpg',
    },
    {
      id: 5,
      quote:
        'The cleaning team is exceptional at what they do. They use eco-friendly products as requested and always ensure my home is immaculately clean and fresh.',
      author: 'Lisa Anderson',
      role: 'Interior Designer',
      rating: 5,
      image: '/assets/images/testimonials/testimonial-5.jpg',
    },
    {
      id: 6,
      quote:
        "I've tried several cleaning services before, but none compare to their level of dedication and expertise. They've made my home maintenance completely worry-free.",
      author: 'James Wilson',
      role: 'Medical Professional',
      rating: 5,
      image: '/assets/images/testimonials/testimonial-6.jpg',
    },
  ];
}
