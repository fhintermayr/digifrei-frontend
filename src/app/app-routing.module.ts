import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./core/components/page-not-found/page-not-found.component";
import {LoginComponent} from "./modules/authentication/components/login/login.component";
import {AccessRoleGuard} from "./shared/guards/access-role.guard";
import {AccessRole} from "./shared/enum/access-role";
import {authenticationGuard} from "./shared/guards/authentication.guard";

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always'
};

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [authenticationGuard, AccessRoleGuard],
    canActivateChild: [authenticationGuard],
    data: {
      requiredRoles: [AccessRole.TRAINER]
    },
    loadChildren: () => import('./modules/admin/admin.module').then(module => module.AdminModule)
  },
  {
    path: 'exemption-request',
    loadChildren: () => import('./modules/exemption-request/exemption-request.module').then(module => module.ExemptionRequestModule)
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
