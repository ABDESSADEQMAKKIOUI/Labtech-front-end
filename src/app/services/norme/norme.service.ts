import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Norme} from "../../entities/norme/norme";

@Injectable({
  providedIn: 'root'
})
export class NormeService {

  private apiUrl = 'http://localhost:8080/api/v1/norme';

  constructor(private http: HttpClient) { }

  getAllNormes(): Observable<Norme[]> {
    return this.http.get<Norme[]>(this.apiUrl);
  }

  addNorme(normeDTO: Norme): Observable<Norme> {
    return this.http.post<Norme>(this.apiUrl, normeDTO);
  }

  deleteNorme(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
