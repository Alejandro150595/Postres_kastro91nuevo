import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Home2Page } from '../home2/home2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

	private _cards: any;
	private _cards1: any;
	private _detalles: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  	this._detalles = Home2Page;

  	this._cards = [
  		{title: "Ojala se te antoje algo", 	     image: "CARRETE.png",   descripcion: "  Un poco de lo que tenemos en nuestro menu."},
      
  	];

  	this._cards1 = [
  		{title: "Cupon unico para ti", 	 image: "cupon.png",    descripcion: "Con este cupon obtendras grandes beneficios cuando hagas una compra con nosotros o cuando refieras a algun conocido o familiar y haga una compra."},

  	];
  }

  loadDetails( currentInfo ) {
	//alert( currentInfo.title );
	this.navCtrl.push( this._detalles, { details: currentInfo } );

}
}
