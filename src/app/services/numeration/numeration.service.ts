import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Numeration} from "../../entities/numeration/numeration";

@Injectable({
  providedIn: 'root'
})
export class NumerationService {

  private apiUrl = 'http://localhost:8081/api/v1/numeration';

  constructor(private http: HttpClient) { }

  getNumerations(): Observable<Numeration[]> {
    return this.http.get<Numeration[]>(this.apiUrl);
  }

  getNumerationsByAnalyse(id: number): Observable<Numeration[]> {
    return this.http.get<Numeration[]>(`${this.apiUrl}/analyse/${id}`);
  }

  addNumeration(numerationDTO: Numeration): Observable<Numeration> {
    return this.http.post<Numeration>(this.apiUrl, numerationDTO);
  }

  updateNumeration(numerationDTO: Numeration): Observable<Numeration> {
    return this.http.put<Numeration>(this.apiUrl, numerationDTO);
  }

  deleteNumeration(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
