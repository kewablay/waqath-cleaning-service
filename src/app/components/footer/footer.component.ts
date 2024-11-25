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
    phone: '056-166-1615',
    address: '123 Tech Street, Suite 101',
    city: 'Cityville, State, ZIP',
    email: 'Contact@company.com',
  };

  navigation = {
    about: [
      { title: 'About us', link: '#' },
      { title: 'Blog', link: '#' },
      { title: 'Contact', link: '#' },
    ],
    social: [
      { title: 'Instagram', link: 'https://www.instagram.com/walqath_cleaningservice?igsh=MWVtYWpqcmxjYWY4cA==' },
      { title: 'Facebook', link: 'https://www.facebook.com/walqathAlhilacleaningservice?mibextid=ZbWKwL' },
      { title: 'X', link: 'https://x.com' },
    ],
  };

  contactLinks = [
    { icon: 'whatsapp', link: 'https://wa.me/056-166-1615' },
    { icon: 'telegram', link: 'https://t.me/yourcompany' },
    { icon: 'gmail', link: 'mailto:WalqathCleaningServices@gmail.com' },
  ];
}
