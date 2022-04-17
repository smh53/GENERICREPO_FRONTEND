import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from 'src/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor( private _httpClient: HttpClient,) { }



  getAllSections() {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + this._tokenStorage.get()['token'],
      }),
    };
    return this._httpClient.get<ListResponseModel<Section>>(`${environment.sectionUrl}GetAllSections`, httpOptions)
  }

  createSection(section: Section) {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + this._tokenStorage.get()['token'],
      }),
    };
    return this._httpClient.post<Section>(`${environment.sectionUrl}CreateSection`, section, httpOptions);
  }

  updateSection(section: Section) {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + this._tokenStorage.get()['token'],
      }),
    };
    return this._httpClient.put<Section>(`${environment.sectionUrl}UpdateSection`, section, httpOptions);
  }


  deleteSection(sectionId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + this._tokenStorage.get()['token'],
      }),
    };
    return this._httpClient.delete(`${environment.sectionUrl}DeleteSection/${sectionId}`, httpOptions);
  }
}