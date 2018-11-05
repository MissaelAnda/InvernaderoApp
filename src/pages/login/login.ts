import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  home = HomePage;
  username = '';
  password = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  clickHome() {
    //this.navCtrl.push(this.home);
    //this.navCtrl.setRoot(this.home);
    //alert(this.username + " " + this.password);

    this.http.get( '/login/?username=' + this.username +
    '&password=' + this.password).subscribe(data => {
        console.log(data.text());
      }, error => {
        console.log(error.text());
      });
  }
}
