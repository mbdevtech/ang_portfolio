import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [FooterComponent, NgFor],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  Skills1=[
        {Title:'SQL', Pourcentage:90},
        {Title: 'PHP', Pourcentage: 80},
        {Title:'Symfony', Pourcentage:90},
        {Title: 'Laravel', Pourcentage: 60},
        {Title:'React', Pourcentage:70},
        {Title: 'Vuejs', Pourcentage: 60}
      ];
  Skills2=[
        {Title:'Windows', Pourcentage:90},
        {Title: 'Linux', Pourcentage: 80},
        {Title:'Wordpress', Pourcentage:80},
        {Title: 'Magento', Pourcentage: 70},
        {Title:'Git', Pourcentage:90},
        {Title: 'Docker', Pourcentage: 60}
      ];

}
