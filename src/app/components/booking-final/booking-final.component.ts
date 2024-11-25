import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BookingService } from '../../services/booking.service';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PaymentMethod } from '../../models/app.model';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-booking-final',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    DropdownModule,
  ],
  templateUrl: './booking-final.component.html',
  styleUrl: './booking-final.component.sass',
})
export class BookingFinalComponent {
  bookingFinalForm: FormGroup;
  paymentMethods: PaymentMethod[] = [
    { label: 'Credit Card', value: 'credit-card' },
    { label: 'PayPal', value: 'paypal' },
    { label: 'Bank Transfer', value: 'bank-transfer' },
  ];

  constructor(private fb: FormBuilder, private bookingService: BookingService) {
    this.bookingFinalForm = this.fb.group({
      specialInstructions: [''],
      paymentMethod: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.bookingFinalForm.valid) {
      this.bookingService.updateFormData({
        final: this.bookingFinalForm.value,
      });
      this.bookingService.nextStep();
    }
  }
}
