import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  activeToInactiveCounter = 0;
  InactiveToActiveCounter = 0;

  incrementActiveToInactiveCounter() {
    this.activeToInactiveCounter++;
    console.log('ActiveToInactive' + this.activeToInactiveCounter);
  }
  incrementInactiveToActiveCounter() {
    this.InactiveToActiveCounter++;
    console.log('InactiveToActive' + this.InactiveToActiveCounter);
  }
}
