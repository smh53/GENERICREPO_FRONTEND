import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent, RowClassRules } from 'ag-grid-community';
import { SectionService } from 'src/services/section.service';

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.scss']
})
export class ListSectionComponent implements OnInit {
  rowData!: any[];
  
  constructor(private _sectionService: SectionService) { }

  ngOnInit(): void {
   
    this.getAllSections();
    
  }
  columnDefs: ColDef[] = [
    {headerName: 'ID', field: 'id', sortable: true, filter: true },
    {headerName: 'İsim', field: 'name', sortable: true, filter: true },
    {headerName: 'Bölüm Numarası', field: 'sectionNo', sortable: true, filter: true }
];

getAllSections() {
  this._sectionService.getAllSections().subscribe(response => {
    this.rowData = response.data;
    console.log(response.data);
  });
}
public rowClassRules: RowClassRules = {
  //tabloda şart bazlı satır stilleme. (.make-orange) styles.scss içinde çalışıyor, bu component'in scss'sinde çalışmıyor(?)

  'make-orange': function (params) {
    console.log(params.data.sectionNo);
    return params.data.sectionNo > 3; }, 
 
};

onGridReady(params: GridReadyEvent) {
  params.api.sizeColumnsToFit(); // az sütun var, ekrana oturtmak için kullanıldı
  params.api.resetRowHeights();
}


}
