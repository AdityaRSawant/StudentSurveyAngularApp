import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { ProjectService } from '../../project.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-student-survey',
  templateUrl: './student-survey.component.html',
  styleUrls: ['./student-survey.component.css']
})
export class StudentSurveyComponent implements OnInit {

  studentid = "";
  fname = "";
  lname = "";
  staddr = "";
  zipcode = "";
  city = "";
  state = "";
  contact = "";
  email = "";
  surveydate = ""
  recommend = "";
  comments = "";
  sources = ["Friends", "Television", "Internet", "Other"];
  likedArr = ["Students", "Location", "Campus", "Atmosphere", "Dorm Rooms", "Sports"];
  selectedLikedArr = [];

  constructor(private router: Router, private http: HttpClientModule) { }

  ngOnInit(): void {
  }

  /**
   * Function that gets the value of selected checkbox
   * @param event is the variable that catches the event that occurs on client side and captures the value
   * @param liked has the value of checkbox fetched from ngModel
   */
  getSelectedLike(event, liked: String) {
    if (event.target.checked == true) {
      //Push the value of checkbox if it is selected
      this.selectedLikedArr.push(liked);
    }
    else {
      //If the checkbox is unchecked after previously selecting, remove that value from array
      if (event.target.checked == false) {
        if (this.selectedLikedArr.indexOf(liked) > -1) {
          this.selectedLikedArr.splice(this.selectedLikedArr.indexOf(liked), 1);
        }
      }
    }
  }

  submitData(submittedForm: NgForm)
  {
    var liked = "";
      for(var i = 0; i < this.selectedLikedArr.length; i++)
      {
        //Generate comma separated values of liked array items
        liked = liked + this.selectedLikedArr[i] + ",";
      }
      //Remove the last added comma after last value
      liked = liked.substring(0, liked.length - 1);
    
      //Generate data object that needs to be passed to the POST service call

      var dataObj = {
        comments: submittedForm.form.value.comments,
        contactInfo: {
          address: submittedForm.form.value.staddr,
          city: submittedForm.form.value.staddr,
          email: submittedForm.form.value.email,
          firstName: submittedForm.form.value.fname,
          lastName: submittedForm.form.value.lname,
          id: "0",
          phone: submittedForm.form.value.contact,
          state: submittedForm.form.value.state,
          zip: submittedForm.form.value.zipcode,
        },
        date: submittedForm.form.value.surveydate,
        doRecommend: submittedForm.form.value.recommend,
        interestsInCampus: submittedForm.form.value.source,
        likedAboutCampus: liked,
        raffle: "42",
        id: submittedForm.form.value.studentid
      }

      console.log(dataObj);

      this.router.navigate(['/allsurvey']);


  }

  /**
   * Function to reset all Fields
   */
  resetForm() {
    this.studentid = "";
    this.fname = "";
    this.lname = "";
    this.staddr = "";
    this.city = "";
    this.state = "";
    this.zipcode = "";
    this.contact = "";
    this.email = "";
    this.surveydate = "";
    this.comments = "";
}

}
