import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)},
  {path: 'task', loadChildren: () => import("./modules/dashboard/dashboard.module").then(m => m.DashboardModule)},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
