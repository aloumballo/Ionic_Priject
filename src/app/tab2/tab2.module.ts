import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { TokenServiceTsService } from '../shared/services/token.service.ts.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthServiceTsService } from '../auth.service.ts.service';
import { StorageServiceTsService } from '../shared/services/storage.service.ts.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    HttpClientModule
  ],
  declarations: [Tab2Page],
  providers:[StorageServiceTsService,TokenServiceTsService , AuthServiceTsService ]

})
export class Tab2PageModule {}
