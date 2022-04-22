import { Component, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { map, Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private breakpointService: NbMediaBreakpointsService
  ) { }

  ngOnInit(): void {
    
    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);
  
  
  }

  themes = [
    {
      value: 'default',
      name: 'Aydınlık',
    },
    {
      value: 'dark',
      name: 'Karanlık',
    },
    {
      value: 'cosmic',
      name: 'Kozmik',
    },
    {
      value: 'corporate',
      name: 'Kurumsal',
    },
  ];
  currentTheme = 'default';
  
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');


    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }
  


}
