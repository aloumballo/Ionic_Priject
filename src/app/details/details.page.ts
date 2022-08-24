import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../shared/models/produit';
import { CatalogueService } from '../shared/services/catalogue.service';
import { DetailsService } from '../shared/services/details.service.ts.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
 // @Input('prod') produits: Produit[] | undefined = []
  //@Input('type') type:string="catalogue"
  @Input() produit: Produit | null = null
  detailProduit: any
  ok = false;
  frites: any
  tailles: any
   // type: string = ''

  constructor(private route: Router, private mba: CatalogueService,private roo: DetailsService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    
    const id = +Number(this.activeRoute.snapshot.paramMap.get('id'))
   // alert(id)
    // this.mba.getProduit(id).subscribe(
    //   prod=> this.detailProduit = prod
    // )  

    this.roo.getDatails(id).subscribe(
      data => {
        let type = this.activeRoute.snapshot.queryParamMap.get('type');
        
        switch (type) {
          case "menu":
            this.detailProduit = data.menu
            break;
          case "burger":
            this.detailProduit = data.burger
            break;

          default:
            break;
        }
        
       // this.detailProduit = data.menu

        console.log(this.detailProduit);
        console.log(this.detailProduit.menuBurgers[0].burger.nom);
        //console.log(this.detailProduit.menuBurgers[0].burger.nom);


      }
    )
  }
      
}
