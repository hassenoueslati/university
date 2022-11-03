import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BatimentService {
  private readonly baseUrl:string=environment.url+"batiment"
  constructor(private httpClient:HttpClient) { }

  public getAllBatiment()
  {
    return this.httpClient.get(this.baseUrl);
  }
}
