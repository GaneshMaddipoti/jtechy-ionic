import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the AddcoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-addcourse',
  templateUrl: 'addcourse.html',
})
export class AddcoursePage {

  course: any = {};
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient, public loadingCtrl: LoadingController) {
    this.course.category = '';
    this.course.name = '';
    this.course.description = '';
    this.course.active = true;

    this.loading =  this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    });    
  }

  submitForm(){
    this.loading.present();
    this.http.post("http://13.127.33.59:8081/savecourse", this.course)
      .subscribe(data => {
        console.log(data);
        this.navCtrl.popToRoot();
       }, error => {
        console.log(error);
      });
  }

}
