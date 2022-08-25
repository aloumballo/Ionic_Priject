import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageServiceTsService } from './storage.service.ts.service';
import { TokenServiceTsService } from './token.service.ts.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeServiceTsService {
   private url: string = 'http://127.0.0.1:8000/api/commandes'
   private ur: string = 'http://127.0.0.1:8000/api/clients/5/commandes'

  constructor(private http: HttpClient, private tokensen: TokenServiceTsService, private servic:StorageServiceTsService) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer ${this.servic.getToken()}`,
    })
  }
  allCommandes(): Observable<any> {
     return this.http.get<any>(this.url, this.httpOptions)
     console.log(this.httpOptions);
  }
   gettoken(): Observable<any> {
     return this.http.get<any>(this.url, this.httpOptions)
     console.log(this.httpOptions);
  }
  addCom(): Observable<any>{
    return this.http.get<any>(this.ur)
  }
}
