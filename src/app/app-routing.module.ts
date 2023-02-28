import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./core/components/page-not-found/page-not-found.component";
import {LoginComponent} from "./modules/authentication/components/login/login.component";
import {AccessRoleGuard} from "./shared/guards/access-role.guard";
import {AuthGuard} from "./shared/guards/auth.guard";

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always'
};

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard, AccessRoleGuard],
    canActivateChild: [AuthGuard],
    data: {
      requiredRoles: ['ADMINISTRATOR']
    },
    loadChildren: () => import('./modules/admin/admin.module').then(module => module.AdminModule)
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
