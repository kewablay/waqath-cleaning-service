import { Component } from '@angular/core';
import { FAQComponent } from '../../components/faq/faq.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';
import { ServicesComponent } from '../../components/services/services.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TestimonialsComponent,
    CtaSectionComponent,
    ServicesComponent,
    WhyChooseUsComponent,
    HeroSectionComponent,
    FAQComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {}
