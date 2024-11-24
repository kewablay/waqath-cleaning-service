import { Injectable } from '@angular/core';
import { BookingForm, BookingState } from '../models/app.model';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly initialState: BookingState = {
    step: 1,
    maxSteps: 4,
    formValid: false
  };

  private readonly _state = signal<BookingState>(this.initialState);
  private readonly _formData = signal<Partial<BookingForm>>({});

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

  updateFormData(stepData: Partial<BookingForm>): void {
    const currentData = this._formData();
    this._formData.set({ ...currentData, ...stepData });
  }

  submitForm(): void {
    // Handle form submission logic here
    console.log('Form submitted:', this._formData());
  }
}