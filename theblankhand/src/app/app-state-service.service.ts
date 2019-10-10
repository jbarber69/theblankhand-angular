import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  private isMobileRes: boolean;

  constructor() {
    if (window.innerWidth < 768) {
      this.isMobileRes = true;
    } else {
      this.isMobileRes = false;
    }
  }

  public getMobileRes(): boolean {
    return this.isMobileRes;
  }

}
