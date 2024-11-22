import { Component, Input } from '@angular/core';
import { ServiceItem } from '../services/services.component';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.sass'
})
export class ServiceCardComponent {

  @Input() service!: ServiceItem

}
