import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Catalogue } from '../shared/models/catalogue';
import { CatalogueService } from '../shared/services/catalogue.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

 catalogue$: Observable<Catalogue> | null = null
  catalogue: Catalogue | null = null
  produits: any[] | undefined = []
  value: any
  @Input("type") type:string="catalogue"
  // type:string="menu"
  constructor(private catalogueService: CatalogueService, private route: Router) { }
  param = this.route.parseUrl(this.route.url).queryParams['type'];
  

  ngOnInit(): void {
    // console.log(this.param);
      this.catalogueService.getCatalogue().subscribe((data) => {
      this.catalogue = data;
      this.produits=this.catalogue?.produit
    })
    // this.produits = this.catalogue?.produit
    // alert(this.produits)
    //alert("ok")
    
  }
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
      delay:4000
    }
  };

   changeCatalogue(value:string) {
      switch (value) {
      case "burger":
          this.produits = this.catalogue?.burger
          this.type = "burger"
    // alert("burger")
          
          break;
      case "menu":
          this.produits = this.catalogue?.menu
          this.type = "menu"
    // alert("menu")
          
        break;
          this.produits = this.catalogue?.produit
          
        break;
    }  
  }

}
