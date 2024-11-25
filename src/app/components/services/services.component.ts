import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SwiperContainer } from 'swiper/element/bundle';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { CustomSwipperComponent } from "../custom-swipper/custom-swipper.component";

register(); // Register Swiper custom elements

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent, CustomSwipperComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './services.component.html',
  styleUrl: './services.component.sass',
})
export class ServicesComponent {
  services: ServiceItem[] = [
    {
      title: 'Standard Cleaning',
      description:
        'Regular maintenance cleaning to maintain a spotless environment.',
      image: 'assets/images/standard-cleaning.jpg',
    },
    {
      title: 'Deep Cleaning',
      description:
        'Thorough cleaning from top to bottom for a complete refresh.',
      image: 'assets/images/deep-cleaning.jpg',
    },
    {
      title: 'Carpet Cleaning',
      description: 'Removes dirt and allergens, revitalizing your carpets.',
      image: 'assets/images/carpet-cleaning.jpg',
    },
    {
      title: 'Window Cleaning',
      description: 'Crystal clear results for a brighter, more inviting space.',
      image: 'assets/images/window-cleaning.png',
    },
    {
      title: 'Move In/Out Cleaning',
      description:
        'Detailed cleaning service for seamless property transitions.',
      image: 'assets/images/move-in-out-cleaning.png',
    },
    {
      title: 'Office Cleaning',
      description: 'Professional cleaning solutions for productive workspaces.',
      image: 'assets/images/office-cleaning.png',
    },
  ];
 

}
