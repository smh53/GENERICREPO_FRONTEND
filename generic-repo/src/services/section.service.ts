import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbTokenStorage } from '@nebular/auth';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from 'src/models/listResponseModel';
import { Section } from 'src/models/section';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(
    private _httpClient: HttpClient,
    private _tokenStorage: NbTokenStorage,
    ) { }



  getAllSections() {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        
      }),
    };
    return this._httpClient.get<ListResponseModel<Section>>(`${environment.sectionUrl}GetAllSections`, httpOptions) 
  }

  createSection(section: Section) {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        
      }),
    };
    return this._httpClient.post<Section>(`${environment.sectionUrl}CreateSection`, section, httpOptions);
  }

  updateSection(section: Section) {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        
      }),
    };
    return this._httpClient.put<Section>(`${environment.sectionUrl}UpdateSection`, section, httpOptions);
  }


  deleteSection(sectionId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        
      }),
    };
    return this._httpClient.delete(`${environment.sectionUrl}DeleteSection/${sectionId}`, httpOptions);
  }
}
