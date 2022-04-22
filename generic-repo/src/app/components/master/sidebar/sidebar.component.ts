import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
    
  }
 
  items: NbMenuItem[] = [
    {
      title: 'Section',
      icon: 'person',
      children: [
        {
          title: 'Add Section',
          icon: 'plus-outline',
          link: 'add-section'
        },
        {
          title: 'Section List',
          icon: 'file-text-outline',
          link: 'list-section'
        },
      ],
    },
  ];
}
