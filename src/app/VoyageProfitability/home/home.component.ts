import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
    selector: "home",
    templateUrl: "home.component.html",
    styleUrls: ["home.component.css"],
    animations: [
        trigger('slideInOut', [
          transition(':enter', [
            style({transform: 'translateX(0%)'}),
            animate('200ms ease-in', style({transform: 'translateX(0%)'}))
          ]),
          transition(':leave', [
            animate('200ms ease-in', style({transform: 'translateX(0%)'}))
          ])
        ])
      ] 
})

export class HomeComponent{
    visible:false;
}