import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Course } from '../../model/course';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ModifycoursePage } from '../modifycourse/modifycourse';

/**
 * Generated class for the CoursedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-coursedetail',
  templateUrl: 'coursedetail.html',
})
export class CoursedetailPage implements OnInit {

  selectedItem: Course;
  private courseUrl = 'http://13.127.33.59:8081/course/';
  course: Course;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private http: HttpClient, public loadingCtrl: LoadingController) {
    this.selectedItem = navParams.get('course');
  }

  ngOnInit(): void {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
    this.getCourse(this.selectedItem.id)
        .subscribe(course => {
          this.course = course;
        });
  }

  getCourse(id: number): Observable<Course> {
    const url = `${this.courseUrl}/${id}`;
    return this.http.get<Course>(url);
  }

  modifyCourse(event, course) {
    this.navCtrl.push(ModifycoursePage, {
      course: course
    });
  }

}
