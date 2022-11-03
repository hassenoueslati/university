import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private readonly baseUrl:string=environment.url

  constructor(private httpClient:HttpClient) { }

  public getAllEtudiants()
  {
    return this.httpClient.get(this.baseUrl+"etudiant");
  }
  
  public getAllEtudiantsOrdered()
  {
    return this.httpClient.get(this.baseUrl+"etudianttri");
  }
}
