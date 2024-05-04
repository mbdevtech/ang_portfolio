import { Component, Input } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
@Input() title:string="";
@Input() description:string="";
@Input() imagePath:string="";
}
