import { Component, OnInit } from '@angular/core';
import { CommandeServiceTsService } from '../shared/services/commande.service.ts.service';
import { StorageServiceTsService } from '../shared/services/storage.service.ts.service';
import { TokenServiceTsService } from '../shared/services/token.service.ts.service';

@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.page.html',
  styleUrls: ['./liste-commande.page.scss'],
})
export class ListeCommandePage implements OnInit {
  liste: any[] | undefined = []
  date: any
  zone: any
  
  

  constructor(private service:CommandeServiceTsService , private servic:StorageServiceTsService , private tokensen:TokenServiceTsService) { }

  async ngOnInit(): Promise<void> {
   this.date = await this.servic.getToken()
     this.service.allCommandes().subscribe(
      
       data => {
         this.liste = data
        console.log(this.liste)
        //console.log('ok');
        // console.log(data);
            
      }
    )
  }
}
