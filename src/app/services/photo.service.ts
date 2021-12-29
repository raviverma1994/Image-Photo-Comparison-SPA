import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'https://jsonplaceholder.typicode.com/photos';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get(baseURL);
  }
}
