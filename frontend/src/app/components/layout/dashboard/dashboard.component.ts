import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { AuthService } from 'src/app/services/auth/auth.service';

interface SidenavConfig {
  shouldRun: boolean | null;
  hasBackdrop: boolean | null;
  mode: MatDrawerMode;
  position: 'start' | 'end';
  isOpened: boolean;
}

interface Menu {
  title: string;
  link?: string;
  submenu?: Menu[];
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  config: SidenavConfig = {
    shouldRun: true,
    hasBackdrop: true,
    mode: 'side',
    position: 'start',
    isOpened: true
  }

  menues: Menu[] = [
    {
      title: "Auth",
      submenu: [
        {
          title: "Permission",
          submenu: [
            {
              title: 'Form',
              link: 'permission-form'
            },
            {
              title: 'List',
              link: 'permission-list'
            }
          ]
        },
        {
          title: "User",
          submenu: [
            {
              title: 'Form',
              link: 'user-form'
            },
            {
              title: 'List',
              link: 'user-list'
            }
          ]
        },
        {
          title: "Role",
          submenu: [
            {
              title: 'Form',
              link: 'role-form'
            },
            {
              title: 'List',
              link: 'role-list'
            }
          ]
        },
      ]
    },


    {
      title: "Project Configuration",
      submenu: [
        {
          title: "Student",
          submenu: [
            {
              title: 'Form',
              link: 'student-form'
            },
            {
              title: 'List',
              link: 'student-list'
            }
          ]
        },
      ]
    },
    {
      title: "Data Entry",
      submenu: [
        {
          title: "Branch",
          submenu: [
            {
              title: 'Form',
              link: 'branch-form'
            },
            {
              title: 'List',
              link: 'branch-list'
            }
          ]
        }
      ]
    }
  ]
  sidebarToggle() {
    this.config.isOpened = !this.config.isOpened;
  }

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
