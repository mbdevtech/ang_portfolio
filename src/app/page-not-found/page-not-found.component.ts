import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
