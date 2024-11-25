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
import { getFormErrorMessage } from '../../utils/form-util';
import { ToastService } from '../../services/toast-service/toast.service';

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
    { label: 'Cash', value: 'cash' },
    { label: 'Bank Transfer', value: 'bank-transfer' },
  ];
  bookingLoading:boolean = false;

  constructor(private fb: FormBuilder, private bookingService: BookingService, private toastService: ToastService) {
    this.bookingFinalForm = this.fb.group({
      specialInstructions: [''],
      paymentMethod: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.bookingFinalForm.valid) {
      this.bookingLoading = true;
      this.bookingService.updateFormData({
        final: this.bookingFinalForm.value,
      });
      this.bookingService.submitForm().subscribe({
        next: (response) => {
          this.bookingLoading = false;
          console.log('Form submitted:', response);
          this.toastService.showSuccess('Form Submitted', 'We will contact you soon.');
          this.bookingService.resetState();
          
        },
        error: (error) => {
          this.bookingLoading = false;
          console.error('Error submitting form:', error);
          this.toastService.showError('Form Submission Failed', 'An error occurred while submitting the form. Please try again.');
        }
      })
    }
  }

  getErrorMessage(controlName: string): string {
    return getFormErrorMessage(controlName, this.bookingFinalForm);
  }

  previousStep(): void {
    this.bookingService.previousStep();
  }
}
