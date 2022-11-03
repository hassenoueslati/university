import { Component, OnInit } from '@angular/core';
import { ClasseService } from '../services/classe.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css'],
})
export class ClasseComponent implements OnInit {
  ListClasse: any[] = [];
  constructor(private classeService: ClasseService) {}

  ngOnInit(): void {
    this.getAllClasse();
  }
  getAllClasse() {
    this.classeService.getAllClasse().subscribe((data: any) => {
      this.ListClasse = data.results.bindings;
    });
  }
  getAllClasseTriNom() {
    this.classeService.getAllClasseTriNom().subscribe((data: any) => {
      this.ListClasse = data.results.bindings;
    });
  }
  getAllClasseTriNbEtud() {
    this.classeService.getAllClasseTriNbEtud().subscribe((data: any) => {
      this.ListClasse = data.results.bindings;
    });
  }
}
