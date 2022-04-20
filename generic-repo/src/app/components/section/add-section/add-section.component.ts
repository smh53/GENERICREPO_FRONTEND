import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { SectionService } from 'src/services/section.service';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent implements OnInit {
  rowData!: any[];
  constructor(private _sectionService: SectionService) { }

  ngOnInit(): void {

    this.getAllSections();
  }
  columnDefs: ColDef[] = [
    { field: 'id', sortable: true, filter: true },
    { field: 'name', sortable: true, filter: true },
    { field: 'sectionNo', sortable: true, filter: true }
];

getAllSections() {
  this._sectionService.getAllSections().subscribe(response => {
    this.rowData = response.data;
    console.log(response.data);
  });
}

}
