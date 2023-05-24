import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'evoc-json';
  surveyName = 'x';
  surveyIntroduction = 'y'
  inputs = 0;
  inputsArray = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/config.json').subscribe(
        (data: any) => {
          this.surveyName = data.surveyInfo.surveyName;
          this.surveyIntroduction = data.surveyInfo.surveyIntroduction;
          this.inputs = data.evocations.inputs;
          this.inputsArray = Array(this.inputs).fill(0).map((x,i)=>i);
        },
        (error: any) => {
          console.error('Error loading configuration file');
        }      
    );

  }

}
