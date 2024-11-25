import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { BookingService } from '../../services/booking.service';
import { PricingOption } from '../../models/app.model';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-package-selection',
  standalone: true,
  imports: [ReactiveFormsModule, RadioButtonModule, DropdownModule],
  templateUrl: './package-selection.component.html',
  styleUrl: './package-selection.component.sass'
})
export class PackageSelectionComponent {
  packageSelectionForm: FormGroup;

  showPricingDropdown: boolean = false;
  pricingOptions: PricingOption[] = [];

  private ownToolsPricing: PricingOption[] = [
    { label: '1 hour: 30 AED', value: '1 hour: 30 AED' },
    { label: '2 hours: 60 AED', value: '2 hours: 60 AED' },
    { label: '3 hours: 90 AED', value: '3 hours: 90 AED' },
    { label: '4 hours: 100 AED', value: '4 hours: 100 AED' },
    { label: '5 hours: 125 AED', value: '5 hours: 125 AED' },
    { label: '6 hours: 150 AED', value: '6 hours: 150 AED' },
    { label: '7 hours: 175 AED', value: '7 hours: 175 AED' },
    { label: '8 hours: 200 AED', value: '8 hours: 200 AED' }
  ];
  
  private professionalToolsPricing: PricingOption[] = [
    { label: '1 hour: 40 AED', value: '1 hour: 40 AED' },
    { label: '2 hours: 80 AED', value: '2 hours: 80 AED' },
    { label: '3 hours: 120 AED', value: '3 hours: 120 AED' },
    { label: '4 hours: 140 AED', value: '4 hours: 140 AED' },
    { label: '5 hours: 175 AED', value: '5 hours: 175 AED' },
    { label: '6 hours: 210 AED', value: '6 hours: 210 AED' },
    { label: '7 hours: 235 AED', value: '7 hours: 235 AED' },
    { label: '8 hours: 260 AED', value: '8 hours: 260 AED' }
  ];

  constructor(private fb: FormBuilder, private bookingService: BookingService) {
    this.packageSelectionForm = this.fb.group({
      provideTools: ['', [Validators.required]],
      pricing: ['', [Validators.required]],
  });

  // Listen for changes in the provideTools control
  this.packageSelectionForm.get('provideTools')?.valueChanges.subscribe(value => {
    this.showPricing();
  });
  }

  showPricing() {
    const toolsChoice = this.packageSelectionForm.get('provideTools')?.value;
    if (toolsChoice) {
      this.showPricingDropdown = true;
      this.pricingOptions = toolsChoice === 'yes' ? this.ownToolsPricing : this.professionalToolsPricing;
      this.packageSelectionForm.get('pricing')?.reset();
    } else {
      this.showPricingDropdown = false;
    }
  }

  onSubmit() {
    console.log(this.packageSelectionForm.value);
    const packageData = { 
      provideTools: this.packageSelectionForm.get('provideTools')?.value,
      pricePerHour: this.packageSelectionForm.get('pricing')?.value,
    }

    console.log("packageData", packageData);
    this.bookingService.updateFormData({
      package: packageData
    });
    this.bookingService.nextStep();
  }

}
