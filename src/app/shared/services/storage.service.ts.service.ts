import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceTsService {
  



  constructor(private storage: Storage) {
    this.storage.create()
  }
   getToken(): any{
    const token = this.storage.get('token')
    return token
  }

  async init(token:string) {
   
    this.storage.set('token', token)
  }

  
  public set(key: string, value: any) {
    this.storage?.set(key, value);
  }
}
