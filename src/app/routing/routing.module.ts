import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { AdminListComponent } from '../admin/admin-list/admin-list.component';
import { AdminUserDetailComponent } from '../admin/admin-user-detail/admin-user-detail.component';

import { UserListComponent } from '../user-list/user-list.component';

import { AuthGuardService } from '../admin/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'admin', component: AdminComponent, canActivate: [ AuthGuardService ], children: [
    {
      path: '',
      children: [
        { path: '', component: AdminListComponent },
        { path: '/user/:id', component: AdminUserDetailComponent }
      ]
    }
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
