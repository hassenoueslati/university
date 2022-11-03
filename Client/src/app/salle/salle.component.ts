import { Component, OnInit } from '@angular/core';
import {SalleService} from "../services/salle.service";

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
  ListSalle : any[] = []
  constructor(private salleService : SalleService) { }

  ngOnInit(): void {
    this.getAllSalle()
  }

  getAllSalle()
  {
    this.salleService.getAllSalle().subscribe((data:any)=>{
      this.ListSalle =data.results.bindings
    })
  }

}
