import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page {
	private _detallesh: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this._detallesh = navParams.data.details;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home2Page');
  }

}
