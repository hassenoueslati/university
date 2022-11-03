import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BatimentComponent} from "./batiment/batiment.component";
import {SalleComponent} from "./salle/salle.component";


const routes: Routes = [
  { path: 'batiment',component: BatimentComponent},
  {path: 'salle',component: SalleComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
