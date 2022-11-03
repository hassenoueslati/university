import { Component, OnInit } from '@angular/core';
import {ClubService} from "../services/club.service";

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {
  ListClub : any[] = []
  constructor(private clubService : ClubService) { }

  ngOnInit(): void {
    this.getAllClub()
  }

  getAllClub()
  {
    this.clubService.getAllClub().subscribe((data:any)=>{
      this.ListClub =data.results.bindings
    })
  }
  getAllClubsOrderedByNb()
  {
    this.clubService.getAllClubsOrderedByNb().subscribe((data:any)=>{
      this.ListClub =data.results.bindings
    })
  }
  getAllClubsOrderedByNom()
  {
    this.clubService.getAllClubsOrderedByNom().subscribe((data:any)=>{
      this.ListClub =data.results.bindings
    })
  }

}
