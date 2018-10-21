import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  private apiUrl = 'https://morablah-api.herokuapp.com';
  public properties: any[] = [];

  constructor(private http: HttpClient) {
    this.getProperties();
  }

  getProperties() {
    // @TODO: Implementar filtro
    const url = this.apiUrl + '/search';
    return this.http.get(url).toPromise().then((properties: any) => {
      this.properties = properties;
      // @TODO: Retirar forEach e receber aluguel do backend
      properties.forEach(property => {
        property.rent = property.amount - property.amount / 4;
      });
    });
  }

  getPropertyById(id: number) {
    const url = `${this.apiUrl}/ads/${id}`;
    return this.http.get(url).toPromise();
  }

  getGroupById(id: number) {
    const url = `${this.apiUrl}/group/${id}`;
    return this.http.get(url).toPromise();
  }

  createProposal(groupId: number, personId: number) {
    const url = `${this.apiUrl}/group/${groupId}/proposal`;
    return this.http.post(url, { person_id: personId }).toPromise();
  }

  getProposalById(id: number) {
    const url = `${this.apiUrl}/proposal/${id}`;
    return this.http.get(url).toPromise();
  }

  doneProposal(id: number) {
    const url = `${this.apiUrl}/proposal/${id}/finish`;
    return this.http.post(url, {}).toPromise();
  }
}
