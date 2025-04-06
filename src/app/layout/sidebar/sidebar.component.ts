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



isMenuOpen: Record<MenuKey, boolean> = {
  student: false,
  // Add more: staff: false, fees: false
};

  toggleMenu(menu: MenuKey): void {
    this.isMenuOpen[menu] = !this.isMenuOpen[menu];
    if(this.isMenuOpen[menu]){
      this.isCollapsed=false;
    }
  }
  toggelSidebar(){
  this.isCollapsed=!this.isCollapsed;
  if (this.isCollapsed) {
    // Collapse all open nested menus when sidebar is collapsed
    for (let key in this.isMenuOpen) {
      this.isMenuOpen[key as keyof typeof this.isMenuOpen] = false;
    }
  }
  }
}
