import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

	private _cards: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  		this._cards = [
  			{image: "texto.png", title: "Aquí nos ubicamos, ven y prueba de todas nuestras delicias."},
  		]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
