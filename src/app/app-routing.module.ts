import { GroupComponent } from './modules/admin/components/group/group.component';
import { UserComponent } from './modules/admin/components/user/user.component';
import { DashboardComponent } from './modules/admin/components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'users', component: UserComponent },
  { path: 'groups', component: GroupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
