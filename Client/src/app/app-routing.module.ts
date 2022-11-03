import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BatimentComponent} from "./batiment/batiment.component";

const routes: Routes = [
  { path: 'batiment',component: BatimentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
