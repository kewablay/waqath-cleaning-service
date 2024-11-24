import { Component } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { getFormErrorMessage } from '../../utils/form-util';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.sass',
})
export class PersonalInfoComponent {
  PersonalInfoform: FormGroup;

  constructor(private fb: FormBuilder, private bookingService: BookingService) {
    this.PersonalInfoform = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.PersonalInfoform.valid) {
      this.bookingService.updateFormData({
        personalInfo: this.PersonalInfoform.value,
      });
      this.bookingService.nextStep();
    } else {
      this.PersonalInfoform.markAllAsTouched();
    }
  }

  getErrorMessage(controlName: string): string {
    return getFormErrorMessage(controlName, this.PersonalInfoform);
  }
}
