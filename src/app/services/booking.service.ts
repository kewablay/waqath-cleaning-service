import { Injectable } from '@angular/core';
import { BookingForm, BookingState } from '../models/app.model';
import { signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  apiUrl = environment.formspreeUrl;
  private readonly initialState: BookingState = {
    step: 4,
    maxSteps: 4,
    formValid: false
  };

  bookingLoading = signal<boolean>(false);

  private readonly _state = signal<BookingState>(this.initialState);
  private readonly _formData = signal<Partial<BookingForm>>({});

  constructor(private http: HttpClient) {}


  get state() {
    return this._state();
  }


  get formData$() {
    return this._formData();
  }

  nextStep(): void {
    const currentState = this._state();
    if (currentState.step < currentState.maxSteps) {
      this._state.set({ ...currentState, step: currentState.step + 1 });
    }
  }

  previousStep(): void {
    const currentState = this._state();
    if (currentState.step > 1) {
      this._state.set({ ...currentState, step: currentState.step - 1 });
    }
  }

  resetState(): void {
    this._formData.set({});
    this._state.set(this.initialState);
  }

  updateFormData(stepData: Partial<BookingForm>): void {
    const currentData = this._formData();
    this._formData.set({ ...currentData, ...stepData });
  }

  private mapBookingFormToSimplePayload(formData: BookingForm): any {
    return {
      name: formData.personalInfo.fullName,
      email: formData.personalInfo.email,
      phone: formData.personalInfo.phone,
      address: formData.personalInfo.address,
      serviceType: formData.preferences.serviceType,
      frequency: formData.preferences.frequency,
      preferredDays: formData.preferences.preferredDays.join(', '), // Join array to make it a string
      professionals: formData.preferences.professionals,
      provideTools: formData.package.provideTools ? 'Yes' : 'No', // Convert boolean to "Yes" or "No"
      pricePerHour: formData.package.pricePerHour,
      specialInstructions: formData.final.specialInstructions,
      paymentMethod: formData.final.paymentMethod
    };
  }

  // submitBooking(formPayload: any): Observable<Object> {
  //   return this.http.post(this.apiUrl, formPayload);
  // }

  submitForm(): Observable<Object> {
    // Handle form submission logic here
    console.log('Form submitted:', this._formData());

    // Create an object that matches Formspree's expected format
    const payload = this.mapBookingFormToSimplePayload(this._formData() as BookingForm);
    const formPayload = {
      ...payload, 
      _subject: 'New Booking Request',  
    };


    return this.http.post(this.apiUrl, formPayload);
  }
}