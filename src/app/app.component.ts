import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedNumber: number;
  numberOddElements: number[] = [];
  numberEvenElements: number[] = [];

  onGameStarted(displayData: {displayNumber: number}){

    if(displayData.displayNumber % 2 == 0) {
      this.numberEvenElements.push({
        storedNumber: displayData.displayNumber
      });
    } else {
      this.numberOddElements.push({
        storedNumber: displayData.displayNumber
      });
    }    
    console.log(displayData.displayNumber);
  }
}
