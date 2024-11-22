import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.sass',
})
export class FAQComponent {
  faqs = [
    {
      question: 'What is Waqath Cleaning Service?',
      answer:
        'Waqath Cleaning Service is a professional cleaning agency that provides high-quality cleaning solutions for residential and commercial spaces. We are committed to delivering a spotless environment tailored to your needs.',
    },
    {
      question: 'What services do you offer?',
      answer:
        'We offer a variety of cleaning services, including regular house cleaning, deep cleaning, office cleaning, carpet cleaning, window cleaning, and move-in/move-out cleaning. We also provide custom cleaning packages to suit specific requirements.',
    },
    {
      question: 'How do I book a cleaning service?',
      answer:
        'Booking a cleaning service with Waqath Cleaning Service is easy. Simply visit our website, fill out the booking form, or give us a call. Our team will confirm your appointment and tailor the service to your needs.',
    },
    {
      question: 'Are your cleaning products safe for pets and children?',
      answer:
        'Yes, we use eco-friendly and non-toxic cleaning products that are safe for both pets and children. If you have specific concerns or preferences, please let us know in advance.',
    },
    {
      question: 'Can I schedule recurring cleaning services?',
      answer:
        'Absolutely! We offer flexible scheduling options for weekly, bi-weekly, or monthly cleaning services. Our recurring cleaning plans are designed to keep your space consistently clean and organized.',
    },
    {
      question: 'What happens if I am not satisfied with the cleaning?',
      answer:
        'Customer satisfaction is our top priority. If you are not satisfied with our cleaning, please contact us within 24 hours, and we will address your concerns and re-clean the area if necessary.',
    },
    {
      question: 'Are your cleaners insured and background-checked?',
      answer:
        'Yes, all our cleaners are fully insured and have undergone thorough background checks. We prioritize safety and professionalism to ensure you can trust our team in your space.',
    },
    {
      question: 'Do I need to provide cleaning supplies and equipment?',
      answer:
        'No, our team comes fully equipped with all the necessary cleaning supplies and equipment. However, if you have specific products you would like us to use, we are happy to accommodate your request.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We currently provide cleaning services in [insert service areas]. If you are unsure whether we serve your location, please contact us for confirmation.',
    },
    {
      question: 'How do I cancel or reschedule an appointment?',
      answer:
        'You can cancel or reschedule your appointment by contacting us at least 24 hours in advance. This allows us to adjust our schedule accordingly without any inconvenience.',
    },
  ];
}
