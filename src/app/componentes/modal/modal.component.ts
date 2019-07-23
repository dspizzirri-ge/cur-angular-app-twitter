import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';  

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  tweetForm:FormGroup = new FormGroup({
    tweet: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
  }

}
