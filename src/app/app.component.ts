import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'evoc-json';
  surveyName: string = '';
  surveyIntroduction: string = '';
  minimal_inputs: number = 0;
  inputsArray: Array<number> = [];
  sociodemograficos: Array<any> = [];

  constructor(private http: HttpClient) {}

  addExtraInput() {
    this.inputsArray.push( this.inputsArray.length + 1 );
  }

  ngOnInit() {
    this.http.get('assets/config.json').subscribe(
        (data: any) => {
          this.surveyName = data.surveyInfo.surveyName;
          this.surveyIntroduction = data.surveyInfo.surveyIntroduction;
          this.minimal_inputs = data.evocations.inputs;
          this.inputsArray = Array.from({length: this.minimal_inputs}, (x, i) => i);
          this.sociodemograficos = data.sociodemograficos;
        },
        (error: any) => {
          console.error('Error loading configuration file');
        }      
    );

  }

}
