import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Section } from 'src/models/section';
import { NotificationService } from './notification.service';
@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  public data: any;
  public bradcastedData: Section[];
  private hubConnection: signalR.HubConnection;
  constructor(private _notificationService: NotificationService) { }


  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
    
                            .withUrl('http://localhost:5001/notification', {
                              skipNegotiation: true,
                              transport: signalR.HttpTransportType.WebSockets
                            })

                            .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }
  
  public addTransferDataListener () {
    console.log("Transfer data started")
    this.hubConnection.on('transferdata', (data) => {
      console.log(data);

      this.data = data;
     

    this._notificationService.notifyError("YENİ KAYIT EKLENDİ", "Something in the way")
    });
  }

  public broadcastSectionData = () => {
  
    this.hubConnection.invoke('broadcastsectiondata', this.data)
    .catch(err => console.error(err));
  }

  public addBroadcastSectionDataListener = () => {
    this.hubConnection.on('broadcastsectiondata', (data) => {
      this.bradcastedData = data;
      this._notificationService.notifyError("YENİ KAYIT EKLENDİ", "Something in the way")
      console.log(data)
    })
  }


}
