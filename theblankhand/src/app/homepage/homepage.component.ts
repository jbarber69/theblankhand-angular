import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private elementRef : ElementRef) {
   }

}
