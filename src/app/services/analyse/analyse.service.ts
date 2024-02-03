import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import {Analyse} from "../../entities/analyse/analyse";
import {Planification} from "../../entities/planification/planification";

@Injectable({
  providedIn: 'root'
})
export class AnalyseService {

  private apiUrl = 'http://localhost:8081/api/v1/analyse';

  constructor(private http: HttpClient) { }

  getAnalyses(): Observable<Analyse[]> {
    return this.http.get<Analyse[]>(this.apiUrl);
  }

  getAnalysisById(id: number): Observable<Analyse> {
    return this.http.get<Analyse>(`${this.apiUrl}/${id}`);
  }

    addAnalysis(idEchantillon: Analyse): Observable<Analyse> {
    return this.http.get<Analyse>(`${this.apiUrl}/echantillon/${idEchantillon}`);
  }

  generatePdfReport(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/pdf/${id}`, { responseType: 'blob' });
  }

  updateAnalysis(analyseDTO: Analyse): Observable<Analyse> {
    return this.http.put<Analyse>(this.apiUrl, analyseDTO);
  }

  deleteAnalysis(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  planifyAnalysis(planificationDTO: Planification): Observable<Planification> {
    return this.http.post<Planification>(`${this.apiUrl}/planification`, planificationDTO);
  }
}
