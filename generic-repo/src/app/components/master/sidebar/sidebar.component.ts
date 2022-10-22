import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 
  constructor(
    
  ) { }

  ngOnInit(): void {
   
  }
 
  items: NbMenuItem[] = [
    {
      title: 'Section',
      icon: 'person',
      children: [    
        {
          title: 'Section List',
          icon: 'file-text-outline',
          link: 'list-section'
        },
      ],
    },

    {
      title: 'Account',
      icon: 'settings-outline',
      children: [    
        {
          title: 'Add User',
          icon: 'file-text-outline',
          link: 'resgistration'
        },

      ],
    },
  ];
}
