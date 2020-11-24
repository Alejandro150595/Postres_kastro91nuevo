import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Media2Page } from '../media2/media2';

@Component({
  selector: 'page-media',
  templateUrl: 'media.html',
})
export class MediaPage {

	private _cards: any;
  private _detalles: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this._detalles = Media2Page;

  	this._cards = [
  	{image: "fresasedit.jpg", title: "FRESAS CON CREMA", descripcion: "Prueba nuestras deliciosas fresas con crema, puedes complementarlas con lechera y chispas de chocolate."},

  	{image: "banderillaedit.jpg", title: "BANDERILLAS", descripcion: "Prueba nuestras deliciosas banderillas, tenemos de salchicha, de queso o si lo prefieres también hay convinadas."},

  	{image: "alitaedit.png", title: "ALITAS", descripcion: "Prueba nuestras deliciosas alitas fritas o si prefieres al carbón"},

    {image: "papasedit.jpg", title: "PAPAS A LA FRANCESA", descripcion: "Prueba nuestras deliciosas papas fritas, disfrutalas con catsup y queso"},
  	];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MediaPage');
  }

  loadDetails( currentInfo ) {
  //alert ( currentInfo.title );
  this.navCtrl.push( this._detalles, { details: currentInfo } );
  }

}
