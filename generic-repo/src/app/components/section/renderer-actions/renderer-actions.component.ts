import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { GridApi, ICellRendererParams, RowNode } from 'ag-grid-community';
import { NotificationService } from 'src/services/notification.service';
import { SectionService } from 'src/services/section.service';
import { SignalrService } from 'src/services/signalr.service';

@Component({
  selector: 'app-renderer-actions',
  templateUrl: './renderer-actions.component.html',
  styleUrls: ['./renderer-actions.component.scss']
})
export class RendererActionsComponent implements ICellRendererAngularComp {
  public cellValue!: number;
  private gridApi!: GridApi;
  private gridNode!: RowNode;
  
  constructor(private _sectionService: SectionService,
    private _notificationService: NotificationService,
    private _signalRService: SignalrService
    
    ) {

  }
  refresh(params: ICellRendererParams): boolean {
    return false;
  }
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
      this.gridApi = params.api;
      this.cellValue = params.data.id;
      this.gridNode = params.node;
      
  }
 
  onDeleteRow() {
    this.gridNode.setSelected(true); // butonun olduğu satırı seç
    var selectedRowData = this.gridApi.getSelectedRows(); // seçili satırın verisini al
    this.gridApi.applyTransaction({ remove: selectedRowData }); // sil
    this._sectionService.deleteSection(this.cellValue).subscribe((response => {
      
      response['success'] 
      ?  this._notificationService.notifySuccess(this._notificationService.successTitle,response['message'])
      :  this._notificationService.error(response['message'], this._notificationService.errorTitle)
    }));
  }
  onUpdateRow() {
    this.gridNode.setSelected(true); // butonun olduğu satırı seç
    var selectedRowData = this.gridApi.getSelectedRows(); // seçili satırın verisini al
    this.gridApi.applyTransaction({ update: selectedRowData }); // güncelle
    this._sectionService.updateSection(selectedRowData[0]).subscribe((response => {
       
     response['success'] 
    ?  this._notificationService.notifySuccess(this._notificationService.successTitle,response['message'])
    :  this._notificationService.error(response['message'], this._notificationService.errorTitle);

   
    
    }));
    this._signalRService.addTransferDataListener();
}


}


