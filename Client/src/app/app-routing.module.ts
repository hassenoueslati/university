import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BatimentComponent} from "./batiment/batiment.component";
import {ClubComponent} from "./club/club.component";
const routes: Routes = [
  { path: 'batiment',component: BatimentComponent},
  { path: 'club',component: ClubComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
