import { Component, OnInit } from '@angular/core';
import { ColDef,GetRowIdFunc,GetRowIdParams,GridApi, GridReadyEvent, RowClassRules } from 'ag-grid-community';
import { SectionService } from 'src/services/section.service';
import {AG_GRID_LOCALE_TR} from 'src/app/constants/locale.tr';
import { RendererActionsComponent } from '../renderer-actions/renderer-actions.component';


@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.scss']
})
export class ListSectionComponent implements OnInit {
  public rowData!: any[];
  public gridApi!: GridApi;
  public gridColumnApi!: any;
  public localeText = AG_GRID_LOCALE_TR;
  
  
  constructor(private _sectionService: SectionService) { }
  ngOnInit(): void {
    this.getAllSections();
  }

  // TABLE CONFIGURATION
  
  columnDefs: ColDef[] = [
   
    {headerName: 'İsim', field: 'name', sortable: true, filter: true,editable: true },
    {headerName: 'Bölüm Numarası', field: 'sectionNo', sortable: true, filter: true,editable: true },
    {headerName: 'İşlemler', sortable: false, editable: false, filter: false, cellRenderer: RendererActionsComponent}
];
// public rowClassRules: RowClassRules = {
//   //tabloda şart bazlı satır stilleme. (.make-orange) styles.scss içinde çalışıyor, bu component'in scss'sinde çalışmıyor(?)
//   'make-orange': function (params) {
    // html'de -- [rowClassRules] = "rowClassRules" -- ekle
//     return params.data.sectionNo > 3; }, 
// };
onGridReady(params: GridReadyEvent) {
  params.api.sizeColumnsToFit(); // az sütun var, ekrana oturtmak için kullanıldı
  params.api.resetRowHeights();
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
  
}
public getRowId: GetRowIdFunc = (params: GetRowIdParams) => params.data.id;
// SECTION OPERATIONS 
getAllSections() {
  this._sectionService.getAllSections().subscribe(response => {
    this.rowData = response.data;
  });
}
onAddRow() {
  const res =  this.gridApi.applyTransaction(
    {
      add: [{sectionNo: 0, name: 'YENİ KAYIT'}],
    }
  )
}
onUpdateRow() {
  var selectedRowData = this.gridApi.getSelectedRows();
  console.log(selectedRowData[0]);
   if(selectedRowData[0].id == undefined)
   {
     this._sectionService.createSection(selectedRowData[0]).subscribe((response => {
       console.log(response);
      this.getAllSections();
      
     }));
   }
   else {
    this._sectionService.updateSection(selectedRowData[0]).subscribe((response => {
      console.log(response);
      var selectedRowData = this.gridApi.getSelectedRows();
      this.gridApi.applyTransaction({ update: selectedRowData });
    }));
   }
}
onDeleteRow () {
    var selectedRowData = this.gridApi.getSelectedRows();
    this._sectionService.deleteSection(selectedRowData[0].id).subscribe((response => {
      console.log(response);
      this.gridApi.applyTransaction({ remove: selectedRowData });
    }));
}


}
