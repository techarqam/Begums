import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import *as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
 
  feedbackModel=new FormGroup({
    comment:new FormControl(""),
    timeStamp:new FormControl(moment().format())
  })
  constructor() { }
  submitRating(rating){

  }
}
