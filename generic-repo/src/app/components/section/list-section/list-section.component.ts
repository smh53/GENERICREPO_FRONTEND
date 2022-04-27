import { Component, OnInit } from '@angular/core';
import { ColDef,GetRowIdFunc,GetRowIdParams,GridApi, GridReadyEvent, RowClassRules, RowHeightParams } from 'ag-grid-community';
import { SectionService } from 'src/services/section.service';
import {AG_GRID_LOCALE_TR} from 'src/app/constants/locale.tr';
import { RendererActionsComponent } from '../renderer-actions/renderer-actions.component';
import { NotificationService } from 'src/services/notification.service';


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
  
  
  constructor(
    private _sectionService: SectionService,
    private _notificationService: NotificationService,
    ) { }
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
getRowHeight(params: RowHeightParams): number | undefined | null {
  return 35;
}
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
  );
  this._notificationService.notifyWarning(this._notificationService.warningTitle,"Yeni eklenen satırı düzenledikten sonra kaydetmek için sarı kalem ikonuna tıklayın! ");
}


}
