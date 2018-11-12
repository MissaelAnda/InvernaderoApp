import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  usuario = '';
  invernaderos = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {
    this.usuario = this.navParams.get('usuario');
    console.log(this.usuario)

    this.getInvernaderos();
  }

  getInvernaderos() {
    this.http.get( '/invernadero/?usuario=' + this.usuario).subscribe(data => {
      console.log(data.text());
      this.invernaderos = data.json();
    }, error => {
      console.log(error.text());
    })
  }
}
