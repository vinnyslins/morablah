import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
