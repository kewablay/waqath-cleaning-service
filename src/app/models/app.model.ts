export interface BookingState {
  step: number;
  maxSteps: number;
  formValid: boolean;
}

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}
export interface CleaningPreferences {
  serviceType: string;
  frequency: string;
  preferredDays: string[];
  professionals: number;
}
export interface PackageDetails {
  provideTools: boolean;
  pricePerHour: number;
}

export interface BookingFinal {
  specialInstructions: string;
  paymentMethod: string;
}

export type BookingForm = {
    personalInfo: PersonalInfo;
    preferences: CleaningPreferences;
    package: PackageDetails;
    final: BookingFinal;
};


export interface PricingOption {
 value: string;
  label: string;
}

export interface PaymentMethod {
  label: string;
  value: string;
}