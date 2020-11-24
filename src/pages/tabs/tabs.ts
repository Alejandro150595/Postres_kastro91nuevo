import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { MediaPage } from '../media/media';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  mediaRoot = MediaPage;
  contactRoot = ContactPage;


  constructor(public navCtrl: NavController) {}

}
