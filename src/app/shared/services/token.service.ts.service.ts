import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class TokenServiceTsService {

  constructor(private router: Router) { }
  saveToken(token :string){

localStorage.setItem('token',token)
//this.router.navigate(['/client/liste'])
  }
  isConnect():boolean{
  const token =localStorage.getItem(' token')
  //console.log(token)
  return !! token
}
  getToken(): any{
    const token = localStorage.getItem('token')
    return token
  }
  getDecodedAccessToken(token: string): any {
  try {
    return jwt_decode(token);
  } catch(Error) {
    return null;
  }
}
}




