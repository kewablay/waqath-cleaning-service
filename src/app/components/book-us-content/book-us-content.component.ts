import { Component } from '@angular/core';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { BookingService } from '../../services/booking.service';
import { PreferencesComponent } from "../preferences/preferences.component";
import { PackageSelectionComponent } from "../package-selection/package-selection.component";
import { BookingFinalComponent } from "../booking-final/booking-final.component";

@Component({
  selector: 'app-book-us-content',
  standalone: true,
  imports: [PersonalInfoComponent, PreferencesComponent, PackageSelectionComponent, BookingFinalComponent],
  templateUrl: './book-us-content.component.html',
  styleUrl: './book-us-content.component.sass',
})
export class BookUsContentComponent {
  constructor(public bookingService: BookingService) {}

  getStepTitle(): string {
    const step = this.bookingService.state.step;
    switch (step) {
      case 1:
        return 'Tell Us About You';
      case 2:
        return 'Your Cleaning Preferences';
      case 3:
        return 'Choose Your Package';
      case 4:
        return 'Wrap Up Your Booking';
      default:
        return 'Booking Form';
    }
  }
  

  getStep() {
    return this.bookingService.state.step;
  }
}
