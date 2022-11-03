import { Component, OnInit } from '@angular/core';
import {BatimentService} from "../services/batiment.service";
import {ClasseService} from "../services/classe.service";
import {ClubService} from "../services/club.service";
import {EtudiantService} from "../services/etudiant.service";
import {SalleService} from "../services/salle.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ListBatiment : any[] = [];
  ListClasse: any[] = [];
  ListClub : any[] = [];
  ListEtudiants : any[] = [];
  ListSalle : any[] = []
  constructor(private batimentService : BatimentService, private classeService: ClasseService,
              private clubService : ClubService, private etudiantService : EtudiantService,
              private salleService : SalleService
              ) { }

  ngOnInit(): void {
    this.getAllBatiment();
    this.getAllClasse();
    this.getAllSalle();
    this.getAllClub();
    this.getAllEtudiants();
  }

  getAllBatiment()
  {
    this.batimentService.getAllBatiment().subscribe((data:any)=>{
      this.ListBatiment =data.results.bindings
    })
  }

  getAllClasse() {
    this.classeService.getAllClasse().subscribe((data: any) => {
      this.ListClasse = data.results.bindings;
    });
  }

  getAllClub()
  {
    this.clubService.getAllClub().subscribe((data:any)=>{
      this.ListClub =data.results.bindings
    })
  }

  getAllEtudiants()
  {
    this.etudiantService.getAllEtudiants().subscribe((data:any)=>{
      this.ListEtudiants =data.results.bindings
    })
  }

  getAllSalle()
  {
    this.salleService.getAllSalle().subscribe((data:any)=>{
      this.ListSalle =data.results.bindings
    })
  }

}
