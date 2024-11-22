import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SwiperContainer } from 'swiper/element';
import { register } from 'swiper/element/bundle';

register(); // Register Swiper custom elements

@Component({
  selector: 'app-custom-swipper',
  standalone: true,
  imports: [CommonModule,ButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './custom-swipper.component.html',
  styleUrl: './custom-swipper.component.sass',
})
export class CustomSwipperComponent<T> {
  @Input() swipperItems!: T[];

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  @ContentChild('itemTemplate') itemTemplate?: TemplateRef<any>;
  @ContentChild('defaultTemplate') defaultTemplate: TemplateRef<any> | null =
    null;

  swiperBreakpoints = {
    380: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    568: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  slideNext() {
    this.swiper.nativeElement.swiper.slideNext();
  }

  slidePrev() {
    this.swiper.nativeElement.swiper.slidePrev();
  }
}
