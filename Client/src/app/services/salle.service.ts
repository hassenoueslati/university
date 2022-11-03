import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SalleService {
  private readonly baseUrl:string=environment.url+"salle"
  constructor(private httpClient:HttpClient) { }

  public getAllSalle()
  {
    return this.httpClient.get(this.baseUrl);
  }
}
