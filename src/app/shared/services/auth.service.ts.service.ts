import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceTsService {
  private apiAuth="http://localhost:8000/api/login_check"

  constructor() { }
}
