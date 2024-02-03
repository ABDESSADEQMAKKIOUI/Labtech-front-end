import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Material} from "../../entities/material/material";

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private apiUrl = 'http://localhost:8081/api/v1/outil';

  constructor(private http: HttpClient) { }

  getAllOutils(): Observable<Material[]> {
    return this.http.get<Material[]>(this.apiUrl);
  }

  addOutil(outilDTO: Material): Observable<Material> {
    return this.http.post<Material>(this.apiUrl, outilDTO);
  }

  updateOutil(outilDTO: Material): Observable<Material> {
    return this.http.put<Material>(this.apiUrl, outilDTO);
  }

  getOutilByID(id: number): Observable<Material> {
    return this.http.get<Material>(`${this.apiUrl}/${id}`);
  }

  deleteOutil(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
