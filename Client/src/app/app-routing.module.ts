import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BatimentComponent} from "./batiment/batiment.component";
import { EtudiantComponent } from './etudiant/etudiant.component';

const routes: Routes = [
  { path: 'batiment',component: BatimentComponent},
  { path: 'etudiant',component: EtudiantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
