import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-media2',
  templateUrl: 'media2.html',
})
export class Media2Page {

	private _detallesm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this._detallesm = navParams.data.details;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Media2Page');
  }

}
