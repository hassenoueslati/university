import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BatimentComponent} from "./batiment/batiment.component";
import { ClasseComponent } from './classe/classe.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import {SalleComponent} from "./salle/salle.component";
import {ClubComponent} from "./club/club.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: '', redirectTo: 'home',pathMatch : 'full'},
  { path: 'home',component: DashboardComponent},
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
