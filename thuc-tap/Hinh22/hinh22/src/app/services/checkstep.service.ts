import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckStep {
  checkReady = false;
  checkAcademy = false;
  checkIelts = false;
  checkStep1 = false;
  checkStep2 = false;
  checkStep3 = false;
  checkStep4 = false;
  constructor() {}

  clickReady() {
    this.checkReady = true;
  }
}
