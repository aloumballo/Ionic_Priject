import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageServiceTsService } from '../shared/services/storage.service.ts.service';
import { TokenServiceTsService } from '../shared/services/token.service.ts.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  form: any= {
  username: null,
  password: null,
  token:null
  
  }

  constructor(private http: HttpClient, private tokenServiceService: TokenServiceTsService, private route: Router, private storage :StorageServiceTsService) { }
  ngOnInit(): void {
  }
  onSubmit(): void {
  
    console.log(this.form)
    this.http.post("http://localhost:8000/api/login_check", this.form).subscribe(
      (data: any) => {
       // alert('ok');
        //console.log(data);
        // localStorage.setItem('tokens', data.token);
        
        const tokenInfo = this.tokenServiceService.getDecodedAccessToken(data.token); // decode token
        // const expireDate = tokenInfo.exp; // get token expiration dateTime
        console.log(tokenInfo);
        if (tokenInfo.roles[0]=='ROLE_GESTIONNAIRE') {
          this.route.navigate(['/gestionnaires/listeCom'])
          
        }
        else if (tokenInfo.roles[0] == 'ROLE_CLIENT') {
          
          this.route.navigate(['liste-commande'])
          
          
        }
        
          this.storage.set("token",data.token)
        //console.log(tokenInfo.roles[0]); // show decoded token object in console
        
        //console.log(data.token)
      } ,
      err => console.log(err)
    )
   
    
  }


}
