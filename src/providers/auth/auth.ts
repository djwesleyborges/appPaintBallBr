import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthProvider {

  constructor(
    public http: Http,
    public storage: Storage
    ) {
  }

  login(credentials){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers});

    this.http.post('http://127.0.0.1:8000/api/login', credentials, options)
    .map(res => res.json())
    .subscribe(data => {
      //console.log(data); // printa o token
      this.storage.set('token', data.token);
    });
  }

  userIsLogged(){
    this.storage.get('token').then(val => {
      if(val !== undefined){
        return val
      }else {
        return false;
      }
    });
  }

  logout(){
    this.storage.remove('token');
  }

}
