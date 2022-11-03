import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  ListEtudiants : any[] = []
  ListEtudiantsOrdered : any[] = []

  constructor(private etudiantService : EtudiantService) { }

  ngOnInit(): void {
    this.getAllEtudiants()
  }

  getAllEtudiants()
  {
    this.etudiantService.getAllEtudiants().subscribe((data:any)=>{
      this.ListEtudiants =data.results.bindings
    })
  }


  getAllEtudiantsOrdered()
  {
    this.etudiantService.getAllEtudiantsOrdered().subscribe((data:any)=>{
      this.ListEtudiants =data.results.bindings
    })
  }
}
