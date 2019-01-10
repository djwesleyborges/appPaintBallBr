import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameServiceProvider } from '../../providers/service-game/service-game';
import { Game } from '../../models/games';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-description-game',
  templateUrl: 'description-game.html',
})
export class DescriptionGamePage {
  public id;
  public obj: any = {};
  public game: Game;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public jogosService: GameServiceProvider,
    public http: Http
    ) {
      this.id = navParams.get("id");
      let url = 'http://127.0.0.1:8000/api/jogos/'
      let game_id = this.navParams.get("game_id");

      this.game = new Game();

      this.http.get(url + game_id)
      .map(res => res.json()) // o que vinher na resposa, converte para json
      .subscribe(data => { // data, onde fica os dados (objetos da requisição)
        this.obj = data;
        this.game.name = data.name;
        this.game.day = data.day;
        this.game.details = data.details;
        this.game.local = data.local;
        this.game.schedule = data.schedule;
        this.game.banner = data.banner;
      });
  }

  ionViewDidLoad() {
  }

}
