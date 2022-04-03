import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@utils/authGuard';

const routes: Routes = [
  {
    path: 'start',
    loadChildren: () => import('./views/start/start.module').then(m => m.StartModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./views/user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./views/user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
