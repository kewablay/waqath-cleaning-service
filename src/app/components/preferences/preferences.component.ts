import { Component } from '@angular/core';
import { getFormErrorMessage } from '../../utils/form-util';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { BookingService } from '../../services/booking.service';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-preferences',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule, ButtonModule, MultiSelectModule],
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.sass',
})
export class PreferencesComponent {
  preferencesForm: FormGroup;
  cleaningServiceOptions = [
    { label: 'Standard Cleaning', value: 'standard' },
    { label: 'Deep Cleaning', value: 'deep' },
    { label: 'Move-in/Move-out Cleaning', value: 'move' },
  ];
  serviceFrequencyOptions = [
    { label: 'One-time', value: 'one-time' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Bi-weekly', value: 'bi-weekly' },
    { label: 'Monthly', value: 'monthly' },
    { label: 'Recurring (Renewable) Cleaning', value: 'recurring cleaning' },
  ];
  preferredDaysOptions = [
    { label: 'Monday', value: 'Monday' },
    { label: 'Tuesday', value: 'Tuesday' },
    { label: 'Wednesday', value: 'Wednesday' },
    { label: 'Thursday', value: 'Thursday' },
    { label: 'Friday', value: 'Friday' },
    { label: 'Saturday', value: 'Saturday' },
    { label: 'Sunday', value: 'Sunday' }
  ];
  professionalsNeededOptions = [
    { label: '1 Professional', value: 1 },
    { label: '2 Professionals', value: 2 },
    { label: '3 Professionals', value: 3 },
    { label: '4 Professionals', value: 4 },
  ];

  constructor(private fb: FormBuilder, private bookingService: BookingService) {
    this.preferencesForm = this.fb.group({
      cleaningService: ['', Validators.required],
      serviceFrequency: ['', Validators.required],
      preferredDays: ['', Validators.required],
      professionalsNeeded: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.preferencesForm.valid) {
      // Handle valid form submission
      console.log('Preferences submitted:', this.preferencesForm.value);
      this.bookingService.updateFormData({
        preferences: this.preferencesForm.value,
      });
      this.bookingService.nextStep();
    } else {
      this.preferencesForm.markAllAsTouched();
    }
  }

  getErrorMessage(controlName: string): string {
    return getFormErrorMessage(controlName, this.preferencesForm);
  }

  previousStep(): void {
    this.bookingService.previousStep();
  }
}
