import { Component, OnInit,Input } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {CustomValidators} from '../shared/customValid';


@Component({
  selector: 'datepicker',
  templateUrl: './calendar-component.component.html',
  styleUrls: ['./calendar-component.component.css']
})
export class CalendarComponentComponent implements OnInit {
  public minDateValue :Date =new Date();
  public datesSe:Date;
  constructor(private _fb: FormBuilder) { }
  public h:boolean=true;

  @Input('group') public myForm: FormGroup;

  ngOnInit() {
    this.myForm= this._fb.group({
          dates: ['', Validators.compose([Validators.required,CustomValidators.pastDateValid(this.datesSe,this.h)])]
        });
  }

  blurs($event){
    const form = this.myForm;
    let f=form;
  }

/*onValueChanged(data?: any) {
   const form = this.myForm;
   const control = form.get('forbiddenName');
}
  blurEvent(event){
    this.submitted=true;
    const form = this.myForm;
    const control = form.get('date');

    if(control && control.dirty && !control.valid){
      this.formErrors['dates']='invalid date';
    }

  }*/



}
