import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DescriptionGamePage } from './description-game';

@NgModule({
  declarations: [
    DescriptionGamePage,
  ],
  imports: [
    IonicPageModule.forChild(DescriptionGamePage),
  ],
})
export class DescriptionGamePageModule {}
