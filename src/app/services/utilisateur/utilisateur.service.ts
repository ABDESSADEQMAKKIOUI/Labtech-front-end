import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Utilisateur} from "../../entities/utilisateur/utilisateur";
import {NgForm} from "@angular/forms";
import {Fournisseur} from "../../entities/fournisseur/fournisseur";
import {UserAuthService} from "../user-auth.service";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiUrl = 'http://localhost:8081/api/v1/utilisateur';
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(private http: HttpClient , private userAuthService: UserAuthService) { }

  getAllUsers(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.apiUrl);
  }
  public login(loginData) {
    return this.http.post('http://localhost:8081/login', loginData, {
      headers: this.requestHeader,
    });
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
  // @ts-ignore
  public roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }
  // login(username: string, password: string): Observable<Utilisateur> {
  //   const params = { username, password };
  //   return this.http.get<Utilisateur>(`${this.apiUrl}/login`, { params });
  // }
}
