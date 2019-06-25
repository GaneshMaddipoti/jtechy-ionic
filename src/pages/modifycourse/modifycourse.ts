import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Course } from '../../model/course';

/**
 * Generated class for the ModifycoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modifycourse',
  templateUrl: 'modifycourse.html',
})
export class ModifycoursePage {

  course: any = {};
  loading: any;
  private courseUrl = 'http://13.127.33.59:8081/course/';
  selectedItem: Course;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient, public loadingCtrl: LoadingController) {
    this.course.category = '';
    this.course.name = '';
    this.course.description = '';
    this.course.active = true;

    this.selectedItem = navParams.get('course');

    // this.loading =  this.loadingCtrl.create({
    //   content: 'Please wait...',
    //   duration: 3000,
    //   dismissOnPageChange: true
    // });    
  }

  ngOnInit(): void {
    //this.loading.present();
    this.getCourse(this.selectedItem.id)
        .subscribe(course => {
          this.course = course;
        });
  }

  getCourse(id: number): Observable<Course> {
    const url = `${this.courseUrl}/${id}`;
    return this.http.get<Course>(url);
  }

  submitForm(){
    //this.loading.present();
    this.http.post("http://13.127.33.59:8081/savecourse", this.course)
      .subscribe(data => {
        console.log(data);
        this.navCtrl.popToRoot();
       }, error => {
        console.log(error);
      });
  }

}
