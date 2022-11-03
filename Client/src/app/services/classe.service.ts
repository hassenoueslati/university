import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClasseService {
  private readonly baseUrl: string = environment.url;
  constructor(private httpClient: HttpClient) {}

  public getAllClasse() {
    return this.httpClient.get(this.baseUrl + 'classe');
  }
  public getAllClasseTriNom() {
    return this.httpClient.get(this.baseUrl + 'classeTriNom');
  }
  public getAllClasseTriNbEtud() {
    return this.httpClient.get(this.baseUrl + 'classeTriNombreEtudiants');
  }
}
