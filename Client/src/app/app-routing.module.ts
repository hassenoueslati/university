import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BatimentComponent} from "./batiment/batiment.component";
import { ClasseComponent } from './classe/classe.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import {SalleComponent} from "./salle/salle.component";
import {ClubComponent} from "./club/club.component";

const routes: Routes = [
  { path: 'batiment',component: BatimentComponent},
  { path: 'classe',component: ClasseComponent},
  { path: 'etudiant',component: EtudiantComponent},
  {path: 'salle',component: SalleComponent},
  { path: 'club',component: ClubComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
