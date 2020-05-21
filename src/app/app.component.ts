import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment4Angular';

  oddNumbers:number[] = [];
  evenNumbers: number[] = [];

  logEvent(event: number){
    console.log("Event: ",event);
    if(event%2===0){
      this.evenNumbers.push(event);
    }else {
      this.oddNumbers.push(event);
    }
  }
}
