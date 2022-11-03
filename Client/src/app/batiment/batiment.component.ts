import { Component, OnInit } from '@angular/core';
import {BatimentService} from "../services/batiment.service";

@Component({
  selector: 'app-batiment',
  templateUrl: './batiment.component.html',
  styleUrls: ['./batiment.component.css']
})
export class BatimentComponent implements OnInit {
  ListBatiment : any[] = []
  constructor(private batimentService : BatimentService) { }

  ngOnInit(): void {
    this.getAllBatiment()
  }

  getAllBatiment()
  {
    this.batimentService.getAllBatiment().subscribe((data:any)=>{
      this.ListBatiment =data.results.bindings
    })
  }

  getAllBatimentTri()
  {
    this.batimentService.getAllBatimentTri().subscribe((data:any)=>{
      this.ListBatiment =data.results.bindings
    })
  }
  getAllBatimentTriByNom()
  {
    this.batimentService.getAllBatimentTriByNom().subscribe((data:any)=>{
      this.ListBatiment =data.results.bindings
    })
  }

}
