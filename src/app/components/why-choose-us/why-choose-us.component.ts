import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ChooseUsItem {
  icon: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.sass',
})
export class WhyChooseUsComponent {
  chooseUsItems: ChooseUsItem[] = [
    {
      icon: 'pi pi-briefcase',
      title: 'Experienced Professionals',
      description:
        'Our trained and vetted team ensures a thorough, reliable clean every time.',
    },
    {
      icon: 'pi pi-calendar',
      title: 'Flexible Scheduling',
      description: 'We work around your schedule to provide convenience.',
    },
    {
      icon: 'pi pi-check-circle',
      title: 'Satisfaction Guaranteed',
      description:
        "Your happiness is our priority. If you're not satisfied, we'll make it right.",
    },
    {
      icon: 'pi pi-dollar',
      title: 'Transparent Pricing',
      description:
        'No hidden fees—just straightforward pricing tailored to your needs.',
    },
  ];
}
