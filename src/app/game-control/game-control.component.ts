import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() counterEvent = new EventEmitter<number>();
  counter:number = 0;
  interval;

  constructor() { }

  ngOnInit(): void {
  }

  startGame(){
    this.interval = setInterval(() => {
      this.counter = this.counter+1;
      this.counterEvent.emit(this.counter);
    },1000);
  }

  stopGame(){
    clearInterval(this.interval);
  }
}
