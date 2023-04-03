import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionslistComponent } from './missionslist/missionslist.component';
import { MissionsdetailComponent } from './missionsdetail/missionsdetail.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MissionslistComponent },
  { path: 'detail/:id', component: MissionsdetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


  exports: [RouterModule]
})
export class AppRoutingModule { }
