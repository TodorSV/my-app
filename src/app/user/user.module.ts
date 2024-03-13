import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
// import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'user/list', component: UserListComponent },
      { path: 'user/detail/:id', component: UserDetailComponent },

    ]),
  ],
  exports: [UserListComponent,]
})
export class UserModule { }
