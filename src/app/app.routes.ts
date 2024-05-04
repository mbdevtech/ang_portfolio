import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'skills', component: SkillComponent},
  { path: 'work', component: WorkComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
