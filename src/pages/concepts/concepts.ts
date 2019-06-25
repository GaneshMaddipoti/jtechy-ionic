import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../model/course';
import { CoursedetailPage } from '../coursedetail/coursedetail';

/**
 * Generated class for the ConceptsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation. 
 */

@Component({
  selector: 'page-concepts',
  templateUrl: 'concepts.html',
})
export class ConceptsPage implements OnInit{

  selectedItem: any;
  courses: Course[];

  private coursesUrl = 'http://13.127.33.59:8081/courses';
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public http: HttpClient, public loadingCtrl: LoadingController) {
    this.selectedItem = navParams.get('item');
    this.loading =  this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 5000,
      dismissOnPageChange: true
    });
  }

  ngOnInit(): void {
    this.loading.present();
    this.getCourses()
      .subscribe(courses => {
        this.courses = courses;
  });
}
  
  getCourses() {
    return this.http.get<Course[]>(this.coursesUrl);
  }

  itemTapped(event, course) {
    this.navCtrl.push(CoursedetailPage, {
      course: course
    });
  }
}
