import { Component, OnDestroy, OnInit } from '@angular/core';
import { SignalrService } from 'src/services/signalr.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor( )
  {

  }
  ngOnInit(): void {
  //   this._signalRService.startConnection();
  // this._signalRService.addTransferDataListener();   
  }

 

}
