import { Component } from '@angular/core';
import { BookUsHeaderComponent } from "../../components/book-us-header/book-us-header.component";
import { BookUsContentComponent } from "../../components/book-us-content/book-us-content.component";

@Component({
  selector: 'app-book-us',
  standalone: true,
  imports: [ BookUsHeaderComponent, BookUsContentComponent],
  templateUrl: './book-us.component.html',
  styleUrl: './book-us.component.sass'
})
export class BookUsComponent {

}
