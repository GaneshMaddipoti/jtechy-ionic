import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the CategoriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI. 13.127.33.59
*/
@Injectable()

export class CategoriesProvider {

  private courseCategoriesUrl = 'http://13.127.33.59:8081/course_categories';

  constructor(public http: HttpClient) {
    
  }

  public getCourseCategories() {
    return this.http.get<string[]>(this.courseCategoriesUrl);
  }

}
