import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { NgFor } from '@angular/common';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [ProjectComponent, FooterComponent, NgFor],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
projects=[
        {
          title:"SymCommerce",
          description:"Ecommerce Project built with Symfony PHP Framework.",
          imagePath: '../assets/symfony-ecommerce.png'
        },
        {
          title:"EMarket",
          description:"MarketPlace Project built with Symfony PHP Framework.",
          imagePath: '../assets/symfony-emarket.png'
        },
        {
          title:"Catalog",
          description:"Listing Project built with DevNet PHP Framework.",
          imagePath: '../assets/devnet-catalog.png'
        },      
        {
          title:"Lara-vue Blog",
          description:"Blog System Project built with Laravel PHP and Vuejs Frameworks.",
          imagePath: '../assets/symfony-ecommerce.png'
        },
      ]
    }

