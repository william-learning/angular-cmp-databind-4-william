import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, Output, EventEmitter {
  ref: Function;
  incrementNumber: number = 0;
  @Output('gStarted') gameStarted = new EventEmitter<{displayNumber: number}>();
  constructor() { }

  ngOnInit() {
  }

  onClickStart() {
    if (this.ref) {
        clearInterval(this.ref);
    }
    this.ref = setInterval(() => {
      this.gameStarted.emit({
        displayNumber: this.incrementNumber
      });
      this.incrementNumber+=1;
    }, 500);
  }

  onClickStop() {
    clearInterval(this.ref);
  }
}