import { Component } from '@angular/core';
type MenuKey = 'student'; // Add more like 'staff' | 'fees' as needed
@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
isCollapsed=true;
ismenuOpened=false;


isMenuOpen: Record<MenuKey, boolean> = {
  student: false,
  // Add more: staff: false, fees: false
};

  toggleMenu(menu: MenuKey): void {
    this.isMenuOpen[menu] = !this.isMenuOpen[menu];
  }
  toggelSidebar(){
  this.isCollapsed=!this.isCollapsed;
  }
}
