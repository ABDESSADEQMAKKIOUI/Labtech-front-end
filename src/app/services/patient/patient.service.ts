import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Patient} from "../../entities/patient/patient";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = 'http://localhost:8081/api/v1/patient';

  constructor(private http: HttpClient) { }

  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }

  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/${id}`);
  }

    addPatient(patientDTO: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patientDTO);
  }

  updatePatient(patientDTO: Patient): Observable<Patient> {
    return this.http.put<Patient>(this.apiUrl, patientDTO);
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
