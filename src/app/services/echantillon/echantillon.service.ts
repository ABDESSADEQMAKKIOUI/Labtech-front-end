import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Echantillon} from "../../entities/echantillon/echantillon";

@Injectable({
  providedIn: 'root'
})
export class EchantillonService {

  private apiUrl = 'http://localhost:8081/api/v1/echantillon';

  constructor(private http: HttpClient) { }

  getEchantillons(): Observable<Echantillon[]> {
    return this.http.get<Echantillon[]>(this.apiUrl);
  }

  getEchantillonById(id: number): Observable<Echantillon> {
    return this.http.get<Echantillon>(`${this.apiUrl}/${id}`);
  }

  updateEchantillon(echantillonDTO: Echantillon): Observable<Echantillon> {
    return this.http.put<Echantillon>(this.apiUrl, echantillonDTO);
  }

  deleteEchantillon(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  addEchantillon(echantillonDTO: Echantillon): Observable<Echantillon> {
    return this.http.post<Echantillon>(this.apiUrl, echantillonDTO);
  }
}
