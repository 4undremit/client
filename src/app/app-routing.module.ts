import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./shared').then(m => m.SharedModule),
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./auth').then(m => m.AuthModule)
  // },
  // {
  //   path: 'signin',
  //   loadChildren: () => import('./auth').then(m => m.AuthModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
