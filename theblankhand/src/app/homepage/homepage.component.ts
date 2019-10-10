import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import {AppStateService} from '../app-state-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  public isMobile: boolean;

  size(){
    this.isMobile = this.applicationState.getMobileRes()
  }

  constructor(private applicationState: AppStateService) {
  }

}
