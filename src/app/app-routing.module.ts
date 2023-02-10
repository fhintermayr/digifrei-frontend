import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./core/components/page-not-found/page-not-found.component";

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always'
};

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(module => module.AdminModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
