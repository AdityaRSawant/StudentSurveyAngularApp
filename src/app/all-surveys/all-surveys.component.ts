import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-all-surveys',
  templateUrl: './all-surveys.component.html',
  styleUrls: ['./all-surveys.component.css']
})
export class AllSurveysComponent implements OnInit {

  gnumArr = ["G01177792", "G01212121"];
  studentSurveyData = null;
  liked = "";

  constructor(private http: HttpClientModule) { }

  ngOnInit(): void {
    this.studentSurveyData.city = "Fairfax";
    this.studentSurveyData.contact = "5714388908"
    this.studentSurveyData.email = "addy.joga@gmail.com"
    this.studentSurveyData.fname = "Aditya"
    this.studentSurveyData.liked = "Students,Dorm Rooms"
    this.studentSurveyData.lname = "Raghunath"
    this.studentSurveyData.recommend = "Likely"
    this.studentSurveyData.source = "Television"
    this.studentSurveyData.staddr = "Fairfax"
    this.studentSurveyData.state = "VA"
    this.studentSurveyData.studentid = "G01177792"
    this.studentSurveyData.surveydate = "2020-10-06"
    this.studentSurveyData.zipcode = "22031"
    this.studentSurveyData.liked = "Dorm, Campus";
  }

  /**
   * Function to fetch survey data of the student with provided gnumber based on click event
   * @param event is the click event that has all the values of the event
   * @param gnum is the gnumber value fetched from ngModel
   */
  getStudentSurveyData(event, gnum: String) {
    // this.service.getStudentSurvey(gnum).subscribe(
    //   (response: any) => {
    //   this.studentSurveyData = response;
    //   },
    //   (error: any) => {
    //     console.log("Error");
    //     this.studentSurveyData = null;
    //   }
    // );

    this.studentSurveyData.city = "Fairfax";
    this.studentSurveyData.contact = "5714388908"
    this.studentSurveyData.email = "addy.joga@gmail.com"
    this.studentSurveyData.fname = "Aditya"
    this.studentSurveyData.liked = "Students,Dorm Rooms"
    this.studentSurveyData.lname = "Raghunath"
    this.studentSurveyData.recommend = "Likely"
    this.studentSurveyData.source = "Television"
    this.studentSurveyData.staddr = "Fairfax"
    this.studentSurveyData.state = "VA"
    this.studentSurveyData.studentid = "G01177792"
    this.studentSurveyData.surveydate = "2020-10-06"
    this.studentSurveyData.zipcode = "22031"
    this.studentSurveyData.liked = "Dorm, Campus";

  }

}
