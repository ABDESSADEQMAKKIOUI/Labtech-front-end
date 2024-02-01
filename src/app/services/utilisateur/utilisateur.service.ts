import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Utilisateur} from "../../entities/utilisateur/utilisateur";
import {NgForm} from "@angular/forms";
import {Fournisseur} from "../../entities/fournisseur/fournisseur";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiUrl = 'http://localhost:8081/api/v1/utilisateur';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiUrl}/${id}`);
  }

  addUser(utilisateurDTO: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.apiUrl, utilisateurDTO);
  }

  updateUser(utilisateurDTO: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(this.apiUrl, utilisateurDTO);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  login(username: string, password: string): Observable<Utilisateur> {
    const params = { username, password };
    return this.http.get<Utilisateur>(`${this.apiUrl}/login`, { params });
  }
}
