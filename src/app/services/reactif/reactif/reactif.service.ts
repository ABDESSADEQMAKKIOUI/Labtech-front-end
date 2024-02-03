import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Reactif} from "../../../entities/reactif/reactif";

@Injectable({
  providedIn: 'root'
})
export class ReactifService {

  private apiUrl = 'http://localhost:8081/api/v1/Reactif';

  constructor(private http: HttpClient) { }

  getAllReactifs(): Observable<Reactif[]> {
    return this.http.get<Reactif[]>(this.apiUrl);
  }

  getReactifById(id: number): Observable<Reactif> {
    return this.http.get<Reactif>(`${this.apiUrl}/${id}`);
  }

  addReactif(reactifDTO: Reactif): Observable<Reactif> {
    return this.http.post<Reactif>(this.apiUrl, reactifDTO);
  }

  updateReactif(id: number, reactifDTO: Reactif): Observable<Reactif> {
    return this.http.put<Reactif>(this.apiUrl, reactifDTO);
  }

  deleteReactif(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
