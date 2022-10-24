import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/public/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./core/auth/components/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./core/auth/components/sign-up/sign-up.module').then(
        (m) => m.SignUpModule
      ),
  },
  {
    path: 'dashboard',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./modules/admin/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'shop',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/public/shop/shop.module').then((m) => m.ShopModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
