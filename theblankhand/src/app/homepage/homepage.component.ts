import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import {AppStateService} from '../app-state-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  isMobile: boolean = this.applicationState.getMobileRes();
  // window.alert(this.isMobile)

  size() {
    this.isMobile = this.applicationState.getMobileRes();
    window.alert(this.isMobile);
  }

  constructor(private applicationState: AppStateService) {
  }

}
