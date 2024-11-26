import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, SidebarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {
  sidebarVisible: boolean = false;
  constructor(private viewportScroller: ViewportScroller) {}

  navigateToSection(elementId: string): void {
    this.sidebarVisible = false;
    
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(elementId);
    }, 200);
  }
}
