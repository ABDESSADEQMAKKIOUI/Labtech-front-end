import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Fournisseur} from "../../entities/fournisseur/fournisseur";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private apiUrl = 'http://localhost:8080/api/v1/fournisseur';

  constructor(private http: HttpClient) { }

  getFournisseurs(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(this.apiUrl);
  }

  getFournisseurById(id: number): Observable<Fournisseur> {
    return this.http.get<Fournisseur>(`${this.apiUrl}/${id}`);
  }

  addFournisseur(fournisseurDTO: Fournisseur): Observable<Fournisseur> {
    return this.http.post<Fournisseur>(this.apiUrl, fournisseurDTO);
  }

  updateFournisseur(fournisseurDTO: Fournisseur): Observable<Fournisseur> {
    return this.http.put<Fournisseur>(this.apiUrl, fournisseurDTO);
  }

  deleteFournisseur(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
