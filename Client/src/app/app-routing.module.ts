import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BatimentComponent} from "./batiment/batiment.component";
import { ClasseComponent } from './classe/classe.component';

const routes: Routes = [
  { path: 'batiment',component: BatimentComponent},
  { path: 'classe',component: ClasseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
