import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass',
})
export class FooterComponent {
  contactInfo = {
    phone: '+33 5 63 44 67 77',
    address: '123 Tech Street, Suite 101',
    city: 'Cityville, State, ZIP',
    email: 'Contact@company.com',
  };

  navigation = {
    about: [
      { title: 'About us', link: '/about' },
      { title: 'Blog', link: '/blog' },
      { title: 'Contact', link: '/contact' },
    ],
    social: [
      { title: 'Instagram', link: 'https://instagram.com' },
      { title: 'Facebook', link: 'https://facebook.com' },
      { title: 'X', link: 'https://x.com' },
    ],
  };

  contactLinks = [
    { icon: 'whatsapp', link: 'https://wa.me/33563446777' },
    { icon: 'telegram', link: 'https://t.me/yourcompany' },
    { icon: 'gmail', link: 'mailto:contact@company.com' },
  ];
}
