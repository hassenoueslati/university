import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private readonly baseUrl:string=environment.url+"club"
  constructor(private httpClient:HttpClient) { }

  public getAllClub()
  {
    return this.httpClient.get(this.baseUrl);
  }
  public getAllClubsOrderedByNb()
  {
    return this.httpClient.get(this.baseUrl+"tri");
  }
  public getAllClubsOrderedByNom()
  {
    return this.httpClient.get(this.baseUrl+"trinom");
  }
}
