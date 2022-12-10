import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Personnel } from '../models/Personnel';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  private getUrl: string = "http://localhost:9090/api/personnels";

  constructor(private _httpClient: HttpClient) { }

  getPersonnels(): Observable<Personnel[]> {
    return this._httpClient.get<Personnel[]>(this.getUrl).pipe(
      map(response => response)
    )
  }
 
  getTeams(id: number): Observable<Personnel> {
    return this._httpClient.get<Personnel>(`${this.getUrl}/${id}`).pipe(
      map(response => response)
    )
  }
   savePersonnels(personnel: Personnel): Observable<Personnel> {
    return this._httpClient.post<Personnel>(this.getUrl, personnel);
  }
  savePersonnel(id: any,personnel: Personnel): Observable<Personnel> {
    return this._httpClient.post<Personnel>(`${this.getUrl}/${id}`,personnel);
  }

  deleteChef(id: number): Observable<any> {
    return this._httpClient.delete(`${this.getUrl}/${id}`, {responseType: 'text'});
  }
 



 

}

