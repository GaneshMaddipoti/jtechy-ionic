import { Component, OnInit } from '@angular/core';

import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { CategoriesProvider } from '../../providers/categories/categories';
import { ConceptsPage } from '../concepts/concepts';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {
  icons: string[];
  categories: string[];
  items: Array<{title: string}>;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public categoriesProvider: CategoriesProvider, public loadingCtrl: LoadingController) {
    this.loading =  this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 3000,
        dismissOnPageChange: true
      });
  }

  ngOnInit() {
    this.loading.present();
    this.getCourseCategories();
    this.items = [];
  }

  getCourseCategories(){
    this.categoriesProvider.getCourseCategories()
      .subscribe(categories => {
        this.categories = categories;
        for(let i = 0; i < categories.length; i++) {
          this.items.push({
            title: this.categories[i]
          });
        };}, error => {
          this.showNetworkAlert();
          this.navCtrl.popToRoot();
        });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ConceptsPage, {
      item: item
    });
  }

  showNetworkAlert() {
    const alert = this.alertCtrl.create({
      title: 'Network Issue!',
      subTitle: 'Please check your network connection!',
      buttons: ['OK']
    });
    alert.present();
  }
}
