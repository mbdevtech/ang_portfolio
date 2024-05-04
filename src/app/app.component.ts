import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WorkComponent } from './work/work.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AboutComponent,
    SkillComponent,
    ProjectComponent,
    ContactComponent,
    NavbarComponent,
    WorkComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-7-app';
}
