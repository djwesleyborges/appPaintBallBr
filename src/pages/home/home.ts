import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { GameServiceProvider } from '../../providers/service-game/service-game';
import { DescriptionGamePage } from '../description-game/description-game';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public obj: any = {}
  public games: any;

  constructor(public navCtrl: NavController, public jogoService: GameServiceProvider) {
    this.getAllJogos();
  }

  getAllJogos(){
    this.jogoService.load()
    .then(data => {
      this.obj = data;
      this.games = this.obj;
    });
  }

  getDescriptionGame(id){
    this.navCtrl.push(DescriptionGamePage,
      {
        'game_id': id
      });
  }
}
