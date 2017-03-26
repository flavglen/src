import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
//import {CustomValidators} from '../shared/customValid';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css'],

})
export class MyNewComponentComponent implements OnInit {
  public myForm: FormGroup;
  public myDpForm: FormGroup;
  public submitted: boolean=false;
  public events: any[] = [];
  constructor(private _fb: FormBuilder) { }
  public h:boolean=false;

  ngOnInit() {

    this.myForm = this._fb.group({

        });

    this.myDpForm= this._fb.group({

      });

  }

}
