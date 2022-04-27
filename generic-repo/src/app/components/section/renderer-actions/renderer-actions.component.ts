import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { GridApi, ICellRendererParams, RowNode } from 'ag-grid-community';
import { SectionService } from 'src/services/section.service';

@Component({
  selector: 'app-renderer-actions',
  templateUrl: './renderer-actions.component.html',
  styleUrls: ['./renderer-actions.component.scss']
})
export class RendererActionsComponent implements ICellRendererAngularComp {
  public cellValue!: number;
  private gridApi!: GridApi;
  private gridNode!: RowNode;
  constructor(private _sectionService: SectionService) {

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
      console.log(response); 
    }));
  }
  onUpdateRow() {
    this.gridNode.setSelected(true); // butonun olduğu satırı seç
    var selectedRowData = this.gridApi.getSelectedRows(); // seçili satırın verisini al
    this.gridApi.applyTransaction({ update: selectedRowData }); // güncelle
  
    this._sectionService.updateSection(selectedRowData[0]).subscribe((response => {
      console.log(response); 
     
    }));
}


}


